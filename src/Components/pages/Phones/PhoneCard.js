import{Card, Button, Col} from 'react-bootstrap'
import shortenText from '../../shared/utils'
import { Link } from 'react-router-dom'
import './Phones.css'

const PhoneCard = ({name, description, imageFileName, _id}) => {

    return(
        <Col md={4}>
            <Card className='cardImage'>
                <Card.Img variant="top" src={imageFileName} className='phoneCardImage'/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{shortenText(description, 70)}</Card.Text>
                    <Link to = {`/phones/${_id}`} >
                        <Button variant="primary">Phone Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PhoneCard