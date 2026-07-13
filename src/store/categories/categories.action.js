import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesSuccess = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES);
export const fetchCategoriesFailure = (error) => createAction(CATEGORIES_ACTION_TYPES.ERROR_CATEGORIES, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart())
    try {
        const categoryMap = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoryMap));
    } catch (error) {
        dispatch(fetchCategoriesFailure(error));
    }
}