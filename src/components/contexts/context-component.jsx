import { createContext, useReducer, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedHandler,
} from "../../utils/firebase/firebase-component";

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unknown action type: ${action}`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: "SET_CURRENT_USER", payload: user });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChangedHandler((user) => {
      setCurrentUser(user);
      createUserDocumentFromAuth(user);
    });
  }, []);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
