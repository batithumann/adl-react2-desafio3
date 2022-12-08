import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const setActiveClass = ({ isActive }) =>
    isActive ? "active nav-link" : "nav-link";
  return (
    <>
      <Navbar expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="https://seeklogo.com/images/P/Pokemon-logo-EEA2B448BF-seeklogo.com.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>

          <Nav>
            <NavLink className={setActiveClass} to="/">
              Home
            </NavLink>
            <NavLink className={setActiveClass} to="/pokemones">
              Pokemones
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
