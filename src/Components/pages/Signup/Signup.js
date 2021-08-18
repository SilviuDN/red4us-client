import {Component} from 'react'
import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AuthService from '../../../services/auth.service'

class Signup extends Component{

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
            .signup(this.state.username, this.state.pwd)
            .then( () => this.props.history.push('/login'))
            .catch( err => console.log(err))


    }


    render(){
        return(
            <Container>
                <Row>
                    <Col md={{ span:4, offset:4 }}>
                        <h2>Signup</h2>
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

                            <Button variant="primary" type="submit">Signup</Button>

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

export default Signup

