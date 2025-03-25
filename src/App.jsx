import React, { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Cart from "./pages/Cart/cart";
import Footer from "./components/Footer/footer";
import Loginpopup from "./components/LoginPopUp/loginPopup";
import PlaceOrder from "./pages/PlaceOrder/placeOrder";

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
