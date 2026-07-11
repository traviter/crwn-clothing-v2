import { useState, useContext } from 'react';
import {
    auth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'

import { UserContext } from '../../contexts/user.context';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => setFormFields(defaultFormFields)
    const onFormFieldChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const logInWithCredentials = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            setCurrentUser(user);
            createUserDocumentFromAuth(user);
            resetFormFields();
        } catch (error) {
            if (error.code == 'auth/invalid-credential') {
                alert("Invalid email or password");
            }
            console.log("Error logging in with credentials", error);
        }
    }

    const logInWithGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        setCurrentUser(user);
    }

    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={logInWithCredentials}>
                <FormInput label="email" type="email" required onChange={onFormFieldChange} name="email" value={email} />
                <FormInput label="password" type="password" required onChange={onFormFieldChange} name="password" value={password} />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={logInWithGoogleUser}>Sign in with Google</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;