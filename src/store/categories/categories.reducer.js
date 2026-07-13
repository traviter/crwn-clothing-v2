import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
    categoriesMap: {},
    isLoading: false,
    error: null
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true
            }
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categoriesMap: payload
            }
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state;
    }
}