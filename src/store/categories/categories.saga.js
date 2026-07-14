import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { CATEGORIES_ACTION_TYPES } from './categories.types';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from './categories.action';

export function* fetchCategoriesAsync() {
    console.log("Started Fetch Categories");
    try {
        const categoryMap = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSuccess(categoryMap));
    } catch (error) {
        yield put(fetchCategoriesFailure(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}