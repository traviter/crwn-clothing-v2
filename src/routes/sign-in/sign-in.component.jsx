import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    // TODO Query if running on localhost
    const isLocal = false;

    useEffect(async () => {
        const response = await getRedirectResult(auth);
        console.log("Logging redirect")
        console.log(response);
    }, []);

    const logInWithGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
    const logInWithRedirectGoogleUser = async () => {
        const { user } = await signInWithGoogleRedirect();
        createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logInWithGoogleUser}>Sign in with Google Popup</button>
            {!isLocal && <button onClick={logInWithRedirectGoogleUser}>Sign in with Google Redirect</button>}
            <SignUpForm />
        </div >
    )
}

export default SignIn;