import Home from "./routes/Home/home-components";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation-component";
import SignIn from "./routes/sign-in/sign-in-component";

import "./components/category-directory/category-directory-styles.scss";

// Google Authentication

const Shop = () => {
  return (
    <>
      <h1>hello am shop</h1>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
