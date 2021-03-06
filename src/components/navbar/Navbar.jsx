import "./Navbar.css";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";

function NavBar({ cartItems, setSearchField }) {
  function handleChange(event) {
    setSearchField(event.target.value);
  }
  return (
    <div>
      <Navbar
        bg="white"
        variant="white"
        className="nav"
        expand="md"
        fixed="top"
      >
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://i.postimg.cc/rwtyGk6S/logo.png"
              id="logo"
              alt=""
            />
          </Link>
        </Navbar.Brand>

        <Nav className="mr-auto font-link">
          {/* <Nav.Link >Inicio</Nav.Link> */}
          <Link className="nav-link1" to="/category">
            Categorías
          </Link>
          <Link to="/aboutUs">Sobre Nosotros</Link>
        </Nav>

        <Link to="/cart">
          <Cart cartItems={cartItems} />
        </Link>

        <Form inline className="form">
          <FontAwesomeIcon icon={faSearch} className="icon-faSearch" />
          <FormControl
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className="mr-sm-2"
          />
          {/* {<Button variant="outline-info">Search</Button>
           }{" "} */}
        </Form>
        <Link to="/register">
          <i class="fas fa-user font-color"></i>
        </Link>
      </Navbar>
    </div>
  );
}

export default NavBar;
