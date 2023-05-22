import { useState } from "react";
import FormInput from "../form-input/form-input-components";
import "./sign-in-form.scss";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase-component";
import Button from "../button/button-component";

const defaultFields = {
  email: "",
  password: "",
};

const SignInform = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => setFormFields(defaultFields);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }

    resetFormFields();
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your Email and Password</span>

      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          id="Email"
          name="email"
          value={email}
          onChange={handleFormChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          id="Password"
          value={password}
          onChange={handleFormChange}
        />

        <div className="btns--container">
          <Button type="submit">sign in</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInform;
