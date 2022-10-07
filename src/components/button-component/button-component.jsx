import "./button-component.styles.scss";

//Toggle between classes (google and inverted)
const Button_Type_Class = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_Type_Class[buttonType]}`}
      {...otherProps}
    >
      {children}
      {console.log(children)}
    </button>
  );
};
export default Button;
