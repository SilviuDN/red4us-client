import { Toast } from "react-bootstrap"

import logo from './logo.png'

const Alert = ({ closeAlert, show, text, variant }) => {

    return (
        <Toast autohide delay={3000} show={show} onClose={closeAlert} 
            bg={variant.toLowerCase()}
            style={{ zIndex: 10, position: 'fixed', bottom: 38, right: 17, width: 300 }}>
            <Toast.Header closeButton={false} >
                <img
                    src={logo}
                    className="rounded mr-2"
                    alt="Logotipo"
                    style={{ width: 20, height: 20 }}
                />
                <strong className="mr-auto">System message:</strong>
            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}


export default Alert