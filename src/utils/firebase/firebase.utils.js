import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR63r6k9uadchO4XbEF3XIuZEwlmzFNfk",
    authDomain: "crwn-clothing-db-5f3b7.firebaseapp.com",
    projectId: "crwn-clothing-db-5f3b7",
    storageBucket: "crwn-clothing-db-5f3b7.firebasestorage.app",
    messagingSenderId: "259884393766",
    appId: "1:259884393766:web:838db725795f74b8160de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authProvider = new GoogleAuthProvider();

authProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, authProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, authProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}