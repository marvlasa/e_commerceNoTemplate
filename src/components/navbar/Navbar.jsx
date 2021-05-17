import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="nav" expand="md">
        <Navbar.Brand href="#home ">
          <img src="https://i.postimg.cc/rwtyGk6S/logo.png" id="logo" />
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Categorias</Nav.Link>
          <Nav.Link href="#pricing">Sobre Nosotros</Nav.Link>
        </Nav>
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
