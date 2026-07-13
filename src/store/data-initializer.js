import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

import { setCurrentUser } from "./user/user.action";

export const InitializeAppData = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        })
        return unsubscribe;
    }, []);
}