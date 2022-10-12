import { useState } from "react";

import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button-component/button-component.jsx";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../Utils/firebase-folder/firebase.utils";

import { SignUpFormContainer } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do no match (try Again)");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(error, "There is an error");
    }
  };

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpFormContainer>
      <h2>Don't Have an accout?</h2>
      <span>Sign Up with Email and Password</span>
      <form onSubmit={HandleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={HandleChange}
          name="displayName"
          value={displayName}
        />

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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={HandleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit"> Sign Up </Button>
      </form>
    </SignUpFormContainer>
  );
};
export default SignUpForm;
