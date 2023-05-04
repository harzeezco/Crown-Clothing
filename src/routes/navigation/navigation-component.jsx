import { Link, Outlet } from "react-router-dom";
import "./navigation-component.scss";
import Logo from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="logo image" />
        </Link>

        <div className="nav-links-container">
          <Link to="shop" className="nav-link">
            SHOP
          </Link>

          <Link to="sign-in" className="nav-link">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
