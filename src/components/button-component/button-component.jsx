import {
  BaseButton,
  GoogleButton,
  InvertedButton,
} from "./button-component.styles.jsx";

//Toggle between classes (google and inverted)
export const Button_Type_Class = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = Button_Type_Class.base) =>
  ({
    [Button_Type_Class.base]: BaseButton,
    [Button_Type_Class.google]: GoogleButton,
    [Button_Type_Class.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
export default Button;
