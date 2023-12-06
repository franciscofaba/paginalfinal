import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { useAppState } from './AppStateContext';
import { useCarrito } from './CarritoContext';

function Navbars() {
  const { setMostrarComponente } = useAppState();
  const { numeroDeElementosEnCarrito } = useCarrito();
  const [expanded, setExpanded] = useState(false);

  const alcarrito = () => {
    setMostrarComponente(true);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container style={{ margintop:'-10px',marginBottom:'-10px',display: 'flex', justifyContent: 'center', fontFamily:'copperplate', fontSize: '14px',}} >
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              <Nav.Link as={Link} to="/faq">FAQ's</Nav.Link>
              <Nav.Link as={Link} to="/acercade">Nosotros</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Button variant="outline-secondary" onClick={() => alcarrito()}>
                  <Link to="/productos">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                      <span>carrito: {numeroDeElementosEnCarrito}</span>
                    </span>
                  </Link>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
