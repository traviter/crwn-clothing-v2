import { USER_ACTION_TYPES } from "./user.types"
import { createAction } from "../../utils/reducer/reducer.utils"

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
export const googleSigninStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGNIN_START);
export const emailSigninStart = (email, password) => createAction(USER_ACTION_TYPES.EMAIL_SIGNIN_START, { email, password });
export const signinSuccess = (user) => createAction(USER_ACTION_TYPES.SIGNIN_SUCCESS, user);
export const signinFailure = (error) => createAction(USER_ACTION_TYPES.SIGNIN_FAILURE, error);
export const signupStart = (email, password, displayName) => createAction(USER_ACTION_TYPES.SIGNUP_START, { email, password, displayName });
export const signupSuccess = (user, displayName) => createAction(USER_ACTION_TYPES.SIGNUP_SUCCESS, ({ user, displayName }));
export const signupFailure = (error) => createAction(USER_ACTION_TYPES.SIGNUP_FAILURE, error);
export const signoutStart = () => createAction(USER_ACTION_TYPES.SIGNOUT_START);
export const signoutSuccess = () => createAction(USER_ACTION_TYPES.SIGNOUT_SUCCESS);
export const signoutFailure = (error) => createAction(USER_ACTION_TYPES.SIGNOUT_FAILURE, error);
export const clearUserError = (error) => createAction(USER_ACTION_TYPES.CLEAR_USER_ERROR, error);