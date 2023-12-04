import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <>
      <header>
        <Navbar variant="dark" bg="dark" expand="lg" collapseOnSelect>
          <Container style={{ maxWidth: "1900px" }}>
            <LinkContainer to="/">
              <Navbar.Brand>Perfume-cart</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                {""}

                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <FaShoppingCart /> cart{" "}
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/cart">
                  <Nav.Link to="/login">
                    <FaUser /> sign in
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
