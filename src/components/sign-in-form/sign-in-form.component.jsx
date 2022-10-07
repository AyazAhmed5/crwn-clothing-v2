import { useState } from "react";

import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button-component/button-component.jsx";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../Utils/firebase-folder/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect Password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-form-container">
      <h2>I Have an accout?</h2>
      <span>Sign in with Email and Password</span>
      <form onSubmit={HandleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={HandleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={HandleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit"> Sign In </Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={"google"}
          >
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
