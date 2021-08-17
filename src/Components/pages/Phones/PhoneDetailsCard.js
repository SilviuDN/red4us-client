import{Card, Button, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Phones.css'

const PhoneDetailsCard = ({name, manufacturer, description, color, price, screen, processor, ram, imageFileName, _id}) => {

    return(
        <Col md= {{span:4, offset : 4}}>
        <Card >
            <Card.Img variant="top" src={imageFileName} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>
                    {manufacturer} | Price:
                    <span className="strikethrough">  ${(price * 1.15).toFixed(0)}  </span> 
                    ${price}
                </Card.Subtitle>
                <hr></hr>
                <Card.Text>{description}</Card.Text>
                <Card.Text className="text-muted">{screen} | {processor} | {ram} | {color}</Card.Text>

            </Card.Body>
        </Card>

        {/* <Link to = {`/phones/`} >
            <Button size="lg" variant="primary">Back to Phones list</Button>
        </Link>
        <Link className='btn btn-primary lg' to = {`/`} >Back to Index</Link> */}
        </Col>
    )
}

export default PhoneDetailsCard