import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.GOOGLE_SIGNIN_START:
        case USER_ACTION_TYPES.EMAIL_SIGNIN_START:
        case USER_ACTION_TYPES.CREATE_EMAIL_USER_ACCOUNT_START:
        case USER_ACTION_TYPES.SIGNOUT_START:
            return { ...state, isLoading: true }
        case USER_ACTION_TYPES.SIGNIN_SUCCESS:
            return { ...state, isLoading: false, currentUser: payload }
        case USER_ACTION_TYPES.SIGNOUT_SUCCESS:
            return { ...state, isLoading: false, currentUser: null }
        case USER_ACTION_TYPES.SIGNIN_FAILURE:
        case USER_ACTION_TYPES.SIGNOUT_FAILURE:
        case USER_ACTION_TYPES.SIGNUP_FAILURE:
            return { ...state, isLoading: false, error: payload }
        case USER_ACTION_TYPES.CLEAR_USER_ERROR:
            return { ...state, error: null }
        default:
            return state;
    }
}