import { Component } from "react";
import {Link} from 'react-router-dom'
import {Form, Button, Container} from 'react-bootstrap'
import PhonesService from "../../../services/phones.service";
import UploadsService from "../../../services/uploads.service";
import Spinner from "../../shared/Spinner/Spinner";

class PhoneFormEdit extends Component{
    constructor(){
        super()
        this.state={
            phone:{
                name: undefined,
                manufacturer: undefined,
                description: undefined,
                color: undefined,
                price: undefined,
                imageFileName: undefined,
                screen: undefined,
                processor: undefined,
                ram: undefined,
            },
            loading: false,

        }
        this.phonesService = new PhonesService()
        this.uploadsService = new UploadsService()
    }

    handleInputChange = (e) => {
        // console.log(e)
        const {name, value} = e.target
        this.setState({
            phone: { ...this.state.phone,  [name] : value }
            
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        this.phonesService
            .editPhone(this.props.match.params.phone_id ,this.state.phone)
            .then(res => {
            // .then( (res) => {
            //     this.setState({
            //         phone:{
            //             name: "",
            //             manufacturer: '',
            //             description: '',
            //             color: '',
            //             price: '',
            //             imageFileName: '',
            //             screen: '',
            //             processor: '',
            //             ram: '',
            //         },
            //         loading: false,

            //     })
            //     // this.props.refreshPhonesPage()
            //     // this.props.closeNewPhoneModal()

            //     if (this.props.refreshPhonesPage) {
            //         this.props.refreshPhonesPage()
            //     }
            //     if (this.props.closeNewPhoneModal) {
            //         this.props.closeNewPhoneModal()
            //     }
                if (this.props.history) {
                    this.props.history.push('/phones')
                }
            //     // this.props?.history?.push('/phones')

            })
            .catch(err => console.log(err))
    }


    handleFileUpload = e =>  {

        this.setState({ loading: true })

        const uploadData = new FormData()                       //a form in memory
        uploadData.append('imageData', e.target.files[0])

        this.uploadsService
            .uploadimage(uploadData)
            // .then(response => console.log("The feedback is: ",response))
            .then(response => this.setState({
                phone: { ...this.state.phone, imageFileName: response.data.cloudinary_url },
                loading: false,
            } ))
            .catch(err => console.log(err))
    }

    loadPhone(){
        const phone_id = this.props.match.params.phone_id
        
        this.phonesService
            .getPhone(phone_id)
            .then(response => {
                this.setState({
                    phone:{
                        
                    ...this.state.phone,
                    name: response.data.name,
                    manufacturer: response.data.manufacturer,
                    description: response.data.description,
                    color: response.data.color,
                    price: response.data.price,
                    imageFileName: response.data.imageFileName,
                    screen: response.data.screen,
                    processor: response.data.processor,
                    ram: response.data.ram,
                }
                })
                console.log(this.state)
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.loadPhone()
    
    // componentDidUpdate = (prevProps, prevState) => prevState.phone.name != this.state.phone.name && this.loadPhone()
    


    render(){
        console.log('**************************')

        return(
            <Container>

            {/* <Link className="btn btn-success" to = {`/`} >Index Page</Link> */}
            {/* <Link to = {`/phones`} className = 'btn btn-primary'>Phones</Link> */}
            
            <Form onSubmit={this.handleFormSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Product name" value={this.state.phone.name} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="manufacturer">
                    <Form.Label>Manufacturer</Form.Label>
                    <Form.Control name="manufacturer" type="text" placeholder="Product manufacturer" value={this.state.phone.manufacturer} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" type="text" placeholder="Product description" value={this.state.phone.description} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="color">
                    <Form.Label>Color</Form.Label>
                    <Form.Control name="color" type="text" placeholder="Product color" value={this.state.phone.color} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" type="number" placeholder="Product price" value={this.state.phone.price} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageFile">
                    <Form.Label>Image:</Form.Label>
                    <Form.Control name="imageFile" type="file" onChange={this.handleFileUpload}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="screen">
                    <Form.Label>Screen</Form.Label>
                    <Form.Control name="screen" type="text" placeholder="Product screen" value={this.state.phone.screen} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="processor">
                    <Form.Label>Processor</Form.Label>
                    <Form.Control name="processor" type="text" placeholder="Product processor" value={this.state.phone.processor} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="ram">
                    <Form.Label>Ram</Form.Label>
                    <Form.Control name="ram" type="number" placeholder="Product ram" value={this.state.phone.ram} onChange={this.handleInputChange}/>
                </Form.Group>
                
                <Button variant="primary" type="submit" disabled={this.state.loading}>            
                    {this.state.loading ? <Spinner size={30}/>  : null}
                    {this.state.loading ? 'Uploading image'  : 'Edit Product'}
                </Button>

                <Button variant="secondary" onClick={this?.props?.closeNewPhoneModal}>
                        Cancel
                </Button>
            </Form>

            </Container>
        )
    }
}

export default PhoneFormEdit