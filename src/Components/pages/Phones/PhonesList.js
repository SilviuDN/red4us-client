import {Component} from 'react'
import { Row } from 'react-bootstrap'
import PhonesService from './../../../services/phones.service'
import PhoneCard from './PhoneCard'
import Spinner from '../../shared/Spinner/Spinner'

class PhonesList extends Component{

    constructor(){
        super()
        this.state = {
            phones: undefined,
            // modal: false,
        }
        this.phonesService = new PhonesService()
    }

    loadPhones(){
        this.phonesService
            .getPhones()
            .then( res => this.setState({
                phones: res.data,
                loading: false,
            }))
            .catch(err => console.log(err))
    }

    componentDidMount = () =>{
        this.loadPhones()
    }

    render(){
        
        return (

            this.state.phones===undefined
            ?
            <>
            <Spinner size={60}/>
            <h1>The list goes here...</h1>
            </>
            :
            <>
            <hr></hr>

            <Row>
                {this.state.phones.map(phone =>  <PhoneCard key={phone._id} {...phone}/>)}
            </Row>
            </>
            
            

        )
    }

}

export default PhonesList