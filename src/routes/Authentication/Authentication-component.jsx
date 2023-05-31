import SignInform from "../../components/sign-in-form/sign-in-form-component";
import SignUpform from "../../components/sign-up-form/sign-up-form-component";

import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authetication-container">
      <SignInform />
      <SignUpform />
    </div>
  );
};

export default Authentication;
