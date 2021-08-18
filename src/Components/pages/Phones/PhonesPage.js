import { Container, Button, Modal } from 'react-bootstrap'
import PhonesList from './PhonesList'
// import {Link} from 'react-router-dom'
import {Component} from 'react'
import PhoneForm from './PhoneForm'


class PhonesPage extends Component{

    constructor(){
        super()
        this.state = {
            modal: false,
        }
    }

    closeNewPhoneModal = () => {
        this.setState({
            modal: false
        })
    }

    openNewPhoneModal = () => {
        this.setState({
            modal: true
        })
    }

    refreshPhonesPage = () => {
        this.props?.history?.push('/phones')
    }

    // componentDidUpdate = (prevProps, prevState) => prevState.modal !== this.state.modal && this.props?.history?.push('/phones')


render(){    
    return(
        <Container>
            {
                this.props.loggedUser 
                &&
                <Button variant="secondary" onClick={this.openNewPhoneModal}>
                    New Phone Modal
                </Button>
            }

            <PhonesList />
            {/* <PhonesList key={this.state.modal}/> */}
            

            <Modal show={this.state.modal} onHide={this.closeNewPhoneModal}>
                <Modal.Header closeButton>
                <Modal.Title>New Phone</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <PhoneForm closeNewPhoneModal={this.closeNewPhoneModal}  refreshPhonesPage = {this.refreshPhonesPage}/>

                </Modal.Body>

                {/* <Modal.Footer>
                <Button variant="secondary" onClick={this.closeNewPhoneModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.closeNewPhoneModal}>
                    Save Changes
                </Button>
                </Modal.Footer> */}

            </Modal>


        </Container>
        
    )
}
}

export default PhonesPage