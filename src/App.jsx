import Home from "./routes/Home/home-components";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation-component";
import Shop from "./routes/Shop/shop-component";
import Authentication from "./routes/Authentication/Authentication-component";

import Checkout from "./routes/checkout/checkout-component";

// Google Authentication

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/shop/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
