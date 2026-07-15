import { takeLatest, all, call, put } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import { signinSuccess, signinFailure, signupSuccess, signupFailure, signoutSuccess, signoutFailure } from './user.action';
import { getCurrentUser, createUserDocumentFromAuth, signOutUser } from '../../utils/firebase/firebase.utils';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

export function* userSagas() {
    yield all([call(onCheckUserSession), call(onGoogleSigninStart), call(onEmailSigninStart), call(onSignupStart), call(onSignupSuccess), call(onSignoutStart)]);
}

function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticatedAsync);
}

function* isUserAuthenticatedAsync() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (userAuth) {
            yield call(getSnapshotFromUserAuth, userAuth);
        }
    } catch (error) {
        yield put(signinFailure(error));
    }
}

function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signinFailure(error));
    }
}

function* onGoogleSigninStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_START, signInWithGoogle);
}

function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signinFailure(error));
    }
}

function* onEmailSigninStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_START, signInWithEmail);
}

function* signInWithEmail(action) {
    console.log("Signing in with email");
    const { payload } = action;
    const { email, password } = payload;
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signinFailure(error));
    }
}

function* onSignupStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGNUP_START, signUp);
}

function* signUp(action) {
    const { payload } = action;
    const { email, password, displayName } = payload;
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
        yield put(signupSuccess(user, displayName));
    } catch (error) {
        yield put(signupFailure(error));
    }
}

function* onSignupSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGNUP_SUCCESS, signInAfterSignup);
}

function* signInAfterSignup(action) {
    const { payload } = action;
    const { user, displayName } = payload;
    yield call(getSnapshotFromUserAuth, user, displayName);
}

function* onSignoutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGNOUT_START, signOut);
}

function* signOut(action) {
    try {
        yield call(signOutUser);
        yield put(signoutSuccess());
    } catch (error) {
        yield put(signoutFailure(error));
    }
}