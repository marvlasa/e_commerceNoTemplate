import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import aboutUs from "./pages/aboutUs/aboutUs";
import Category from "./pages/category/Category";
import productDetail from "./pages/productDetail/productDetail";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleCartItems = (item) => {
    setCartItems((cartItems) => [...cartItems, item]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar cartItems={cartItems} />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home handleCartItems={handleCartItems} {...props} />
            )}
          />

          <Route path="/aboutUs" component={aboutUs} />
          <Route path="/category" component={Category} />
          <Route path="/product/:id" component={productDetail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
