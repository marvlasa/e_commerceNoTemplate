import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import aboutUs from "./pages/aboutUs/aboutUs";
import Category from "./pages/category/Category";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
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
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
