
import { Container } from "react-bootstrap"

const UserProfile = ({ loggedUser }) => {

    return (
        <Container>
            <h1>¡Bienvenid@, {loggedUser.username}!</h1>
        </Container>
    )
}

export default UserProfile