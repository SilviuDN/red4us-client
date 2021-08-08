import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const IndexPage = () => {


    return(
        <Container>
            <h1>IndexPage</h1>
            <Link to = {`phones/`} className = 'btn btn-primary'>Phones</Link>
            <Link className="btn btn-success" to = {`phones/new`} >New Phone</Link>
        </Container>
    )
}

export default IndexPage