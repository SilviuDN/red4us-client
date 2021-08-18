import{Card, Button, Col, Row} from 'react-bootstrap'
import shortenText from '../../shared/utils'
import { Link } from 'react-router-dom'
import './Phones.css'

const PhoneCard = ({name, description, imageFileName, _id, loggedUser, owner, deletePhone}) => {

    return(
        <Col md={4}>
            <Card className='cardImage'>
                <Card.Img variant="top" src={imageFileName} className='phoneCardImage'/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{shortenText(description, 70)}</Card.Text>

                    <Row >
                        <Col md={4}>
                            <Link to = {`/phones/${_id}`} >
                                <Button variant="primary">Details</Button>
                            </Link>
                        </Col>

                        <Col>
                            {
                                loggedUser?._id === owner 
                                ? 
                                <>
                                <Row>
                                    <Col md={6}>
                                        <Link to = {`/phones/${_id}/edit`} >
                                            <Button variant="warning">Edit</Button>
                                        </Link>
                                    </Col>

                                    <Col md={6}>
                                        <Link to = {`/phones`} onClick={() => { deletePhone(_id) }}>
                                            <Button variant="danger">Delete</Button>
                                        </Link>
                                    </Col> 

                                </Row>
                                </>
                                :
                                null
                            }
                        </Col>

                    </Row>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default PhoneCard