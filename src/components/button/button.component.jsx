import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';

const BUTTON_TYPES = {
    base: BaseButton,
    google: GoogleSignInButton,
    inverted: InvertedButton
}

const getButton = (buttonType) => BUTTON_TYPES[buttonType] ?? BUTTON_TYPES.base

const Button = ({ children, buttonType, ...otherProps }) => {
    const Button = getButton(buttonType);
    return (
        <Button
            {...otherProps}>
            {children}
        </Button>
    )
};

export default Button;