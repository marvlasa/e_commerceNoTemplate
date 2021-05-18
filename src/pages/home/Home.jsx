import React from "react";
import Footer from "../../components/footer/Footer";
import Product from "../product/Product";

import Carrousel from "../../components/carrousel/Carrousel";

function Home() {
  return (
    <div>
      <Carrousel />
      <Product />

      <Footer />
    </div>
  );
}

export default Home;
