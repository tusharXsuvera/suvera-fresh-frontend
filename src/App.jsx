import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="category" element={<Category />} />
            <Route path="product-detail/:id" element={<ProductDetail />} />
            <Route path="about-us" element={<Aboutus />} />
            <Route path="contact-us" element={<Contact />} />
            {/* <Route path="checkout" element={<Checkout />} /> */}
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
