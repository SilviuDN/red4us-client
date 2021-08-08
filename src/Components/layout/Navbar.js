import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Layout.css'

const NavbarMenu = () => {

    return(
        <Navbar bg="light" expand="md" fixed="top" className="navbarMenu">
            <Container>
                <Navbar.Brand href="#home">red4me</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/phones" className="nav-link">Phones</Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">SignUp</Nav.Link>
                    <Nav.Link href="#link">LogIn</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu  