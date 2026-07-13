import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { setCurrentUser } from "./user.action";

export const initializeUserData = (dispatch) => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    })
    return unsubscribe;
}