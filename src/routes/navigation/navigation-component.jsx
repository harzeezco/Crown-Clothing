import { useContext } from "react";
import { UserContext } from "../../components/contexts/context-component";
import { CartContext } from "../../components/contexts/cart-context";

import { signOutUser } from "../../utils/firebase/firebase-component";

import { Link, Outlet } from "react-router-dom";
import "./navigation-component.scss";
import Logo from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { setCartClick, cartClick } = useContext(CartContext);

  const handleCartDropDown = () => {
    setCartClick(!cartClick);
  };

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

          {currentUser ? (
            <Link to="/auth" className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}

          <CartIcon onClick={handleCartDropDown} />
        </div>

        {cartClick && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
