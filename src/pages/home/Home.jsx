import { useEffect } from "react";
// import Footer from "../../components/footer/Footer";
import Product from "../product/Product";

import Carrousel from "../../components/carrousel/Carrousel";

// import Navbar from "../../components/navbar/Navbar";

function Home({ handleCartItems, searchField }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Carrousel />
      <Product handleCartItems={handleCartItems} searchField={searchField} />
    </div>
  );
}

export default Home;
