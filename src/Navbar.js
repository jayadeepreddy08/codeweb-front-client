import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function NavHead() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to= "/" style={{ textDecoration: 'none' }}>
        <Navbar.Brand>Jd.web</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/*empty space*/}
            
          </Nav>
          <Nav>
            
            <Nav.Link href="/about">
                About Me
            </Nav.Link>
           
            
            <Nav.Link href="/contact">
              Contact Me
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHead;