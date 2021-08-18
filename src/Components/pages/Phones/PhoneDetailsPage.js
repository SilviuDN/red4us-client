import { Component } from "react"
import { Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import PhonesService from "../../../services/phones.service"
import PhoneDetailsCard from "./PhoneDetailsCard"

class PhoneDetails extends Component{
    constructor(){
        super()
        this.state = {
            phone: undefined,
            modal: true,
        }
        this.phonesService = new PhonesService()
    }

    componentDidMount(){
        const {phone_id} = this.props.match.params
        console.log(phone_id)

        this.phonesService
            .getPhone(phone_id)
            .then(response => this.setState({ phone: response.data}))
            .catch(err => console.log(err))

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
        this.props?.history?.push(`/phones/${this.props.phone_id}`)
    }



    render(){

        return(
            !this.state.phone
            ?
            <h2>Getting phone info</h2>
            :
            <Container>

                {/* <Button variant="secondary" onClick={this.openNewPhoneModal}>
                    Edit Phone Modal
                </Button> */}

                <PhoneDetailsCard {...this.state.phone}/>


                <Link className="btn btn-success" to = {`/phones/${this.state.phone._id}/edit`} >Edit Phone</Link>

                {/* <Modal show={this.state.modal} onHide={this.closeNewPhoneModal}>

                    <Modal.Header closeButton>
                        <Modal.Title>Edit Phone</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <PhoneFormEdit closeNewPhoneModal={this.closeNewPhoneModal}  refreshPhonesPage = {this.refreshPhonesPage}  phone ={ this.state.phone}/>
                    </Modal.Body>

                </Modal> */}
            </Container>
            
        )
    }
}

export default PhoneDetails