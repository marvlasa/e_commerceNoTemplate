import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/Navbar";
import Category from "./pages/category/Category";
import aboutUs from "./pages/aboutUs/aboutUs";
import CartBuy from "./pages/cartBuy/CartBuy";
import Register from "./pages/register/Register";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Footer from "./components/footer/Footer";
import "./App.css";
/* import "bootswatch/dist/zephyr/bootstrap.min.css"; */

function App() {
  const [searchField, setSearchField] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleCartItems = (item) => {
    setCartItems((cartItems) => [...cartItems, item]);
  };

  // const handleSearchBox = (event) => {
  //   setSearchField(event.target.value);
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar cartItems={cartItems} setSearchField={setSearchField} />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                handleCartItems={handleCartItems}
                searchField={searchField}
              />
            )}
          />

          <Route path="/aboutUs" component={aboutUs} />
          <Route path="/category" component={Category} />
          <Route path="/product/:slug" component={ProductDetail} />
          <Route
            path="/cart"
            render={(props) => <CartBuy cartItems={cartItems} />}
          />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
