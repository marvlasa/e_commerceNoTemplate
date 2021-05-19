import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";

function NavBar({ cartItems }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="nav" expand="md">
        <Navbar.Brand>
          <Link to="/">
            <img src="https://i.postimg.cc/rwtyGk6S/logo.png" id="logo" />
          </Link>
        </Navbar.Brand>

        <Nav className="mr-auto">
          {/* <Nav.Link >Inicio</Nav.Link> */}
          <Link to="/category">Categorias</Link>
          <Link to="/aboutUs">Sobre Nosotros</Link>
        </Nav>
        <Cart cartItems={cartItems} />
        <Form inline className="form">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          {/*           <Button variant="outline-info">Search</Button>
           */}{" "}
        </Form>
      </Navbar>
    </div>
  );
}

export default NavBar;
