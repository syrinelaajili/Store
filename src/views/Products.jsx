import React from "react";
import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import ListProducts from "../components/listProducts.jsx";
export default function Products() {
  return (
    <div>
      <Header />
      
      <ListProducts />
     
      <Footer />
    </div>
  );
}
