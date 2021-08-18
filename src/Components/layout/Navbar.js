import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Layout.css'

import AuthService from '../../services/auth.service'

const NavbarMenu = ({storeUser, loggedUser, showAlert}) => {

    const authService = new AuthService()

    const logout = () => {
        authService
            .logout()
            .then( res =>{
                storeUser(undefined)
                showAlert('You just logged out. Good bye!', 'warning')
                // this.props.history.push('/phones')
            } )
            .catch( err => console.log(err))
    }

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
                {!loggedUser                     
                    ? 
                    <>
                        <Nav.Link href="/signup">SignUp</Nav.Link>
                        <Nav.Link href="/login">LogIn</Nav.Link>
                    </>
                    :
                    <>
                        <Link className='nav-link' to='myProfile'>MyProfile</Link>
                        <span className='nav-link' onClick={logout}>Logout</span>
                    </>

                }
                    <span className='nav-link'>Hi, {loggedUser ? loggedUser.username : 'Stranger'}!</span>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu  