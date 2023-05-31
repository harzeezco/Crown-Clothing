import {
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer,
} from "./navigation-styles";

import { useContext } from "react";
import { UserContext } from "../../components/contexts/context-component";
import { CartContext } from "../../components/contexts/cart-context";

import { signOutUser } from "../../utils/firebase/firebase-component";

import { Link, Outlet } from "react-router-dom";

import Logo from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
// import { NavigationContainer } from "./navigation-styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { setCartClick, cartClick } = useContext(CartContext);

  const handleCartDropDown = () => {
    setCartClick(!cartClick);
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/" className="logo-container">
          <img src={Logo} alt="logo image" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink to="/auth" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon onClick={handleCartDropDown} />
        </NavLinks>

        {cartClick && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
