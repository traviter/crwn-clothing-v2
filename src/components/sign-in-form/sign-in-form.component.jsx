import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserError, emailSigninStart, googleSigninStart } from '../../store/user/user.action';


import './sign-in-form.styles.scss'

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { selectUserError, selectCurrentUser } from '../../store/user/user.selector';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const userError = useSelector(selectUserError);
    useEffect(() => {
        if (userError?.code === 'auth/invalid-credential') {
            alert("Invalid email or password");
            dispatch(clearUserError());
        }
    }, [userError, dispatch]);

    const currentUser = useSelector(selectCurrentUser);
    useEffect(() => {
        resetFormFields();
    }, [currentUser]);

    const resetFormFields = () => setFormFields(defaultFormFields)
    const onFormFieldChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const logInWithCredentials = async (event) => {
        event.preventDefault();
        dispatch(emailSigninStart(email, password));
    }

    const logInWithGoogleUser = () => dispatch(googleSigninStart());

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