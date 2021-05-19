import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/Navbar";
import Category from "./pages/category/Category";
import aboutUs from "./pages/aboutUs/aboutUs";
import CartBuy from "./pages/cartBuy/CartBuy";
import Register from "./pages/register/Register";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Footer from "./components/footer/Footer";
/* import "bootswatch/dist/zephyr/bootstrap.min.css"; */

function App() {
  const [searchField, setSearchField] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleCartItems = (item) => {
    setCartItems((cartItems) => [...cartItems, item]);
  };

  const handleSearchBox = (event) => {
    setSearchField(event.target.value);
  };

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSearchField(data.results);
      });
  };

  const SEARCH_API = "http://localhost:3079";

  useEffect(() => {
    let url = SEARCH_API;

    if (searchField !== "") {
      url = SEARCH_API;
    } else {
      fetchData(url);
    }
  }, [searchField]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar cartItems={cartItems} />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                handleCartItems={handleCartItems}
                handleSearchBox={handleSearchBox}
              />
            )}
          />

          <Route path="/aboutUs" component={aboutUs} />
          <Route path="/category" component={Category} />
          <Route path="/product/:slug" component={ProductDetail} />
          <Route path="/cart" component={CartBuy} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
