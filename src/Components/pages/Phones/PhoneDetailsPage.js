import { Component } from "react"

import PhonesService from "../../../services/phones.service"
import PhoneDetailsCard from "./PhoneDetailsCard"

class PhoneDetails extends Component{
    constructor(){
        super()
        this.state = {
            phone: undefined
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



    render(){

        return(
            !this.state.phone
            ?
            <h2>Getting phone info</h2>
            :
            <PhoneDetailsCard {...this.state.phone}/>
        )
    }
}

export default PhoneDetails