import React from "react";
// import Footer from "../../components/footer/Footer";
import Product from "../product/Product";

import Carrousel from "../../components/carrousel/Carrousel";

// import Navbar from "../../components/navbar/Navbar";

function Home({ setCartItems }) {
  console.log(setCartItems);
  return (
    <div>
      <Carrousel />
      <Product />
    </div>
  );
}

export default Home;
