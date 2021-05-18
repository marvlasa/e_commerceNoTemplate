import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import aboutUs from "./pages/aboutUs/aboutUs";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={aboutUs} />
          <Route exact path="/category" component={Category} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
