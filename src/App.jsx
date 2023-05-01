import "./components/category-directory/category-directory-styles.scss";
import Home from "./routes/Home/home-components";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation-component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index  element={<Navigation />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
