import React from "react";
import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import Slider from "../components/slider.jsx";
import ListProducts from "../components/listProducts.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <Slider />
      </div>
      
      <Footer />
    </div>
  );
}
