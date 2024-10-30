import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
export default function RouteRole() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="product-detail/:id" element={<ProductDetail />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
