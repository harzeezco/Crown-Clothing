import { useState } from "react";

import FormInput from "../form-input/form-input-components";

import "./sign-up-form.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-component";
import Button from "../button/button-component";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpform = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFields);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      }
      console.log("user creation encountered an error", error);
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
    <div className="sign-up-container">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Username"
          type="text"
          required
          name="displayName"
          id="user-name"
          value={displayName}
          onChange={handleFormChange}
        />

        <FormInput
          label="Email"
          type="email"
          required
          id="user-email"
          name="email"
          value={email}
          onChange={handleFormChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          id="user-password"
          value={password}
          onChange={handleFormChange}
        />

        <FormInput
          label="Confirm password"
          type="password"
          required
          name="confirmPassword"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleFormChange}
        />

        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
};

export default SignUpform;
