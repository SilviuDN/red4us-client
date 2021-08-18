import {Component} from 'react'
import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AuthService from '../../../services/auth.service'

class Login extends Component{

    constructor(){
        super()
        this.state = {
            username: '',
            pwd: ''
        }
        this.authService = new AuthService()
    }

    handleInputChange = (e) => {
        const {name, value} = e.target

        this.setState({
            [name] : value,
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.authService
            .login(this.state.username, this.state.pwd)
            .then( (loggedUser) => {
                this.props.storeUser(loggedUser.data)
                this.props.showAlert( `Welcome, ${loggedUser.data.username}!\nSuccesfully logged in!`, 'success')
                this.props.history.push('/phones')
            } )
            .catch( err => this.props.showAlert( err.response.data.message, 'danger'))


    }


    render(){
        return(
            <Container>
                <Row>
                    <Col md={{ span:4, offset:4 }}>
                        <h2>Login</h2>
                        <hr></hr>
                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>username</Form.Label>
                                <Form.Control name="username" type="text" placeholder="username"  value={this.state.username} onChange={this.handleInputChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="pwd">
                                <Form.Label>password</Form.Label>
                                <Form.Control name="pwd" type="password" placeholder="password" value={this.state.pwd} onChange={this.handleInputChange}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">Login</Button>

                        </Form>
                        <hr></hr>
                        <Link to='/'>
                            <Button variant='primary'>Cancel</Button>
                        </Link>

                    </Col>
                </Row>


            </Container>
        )
    }





}

export default Login

