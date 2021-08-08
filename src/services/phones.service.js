import axios from 'axios'

class PhonesService{
    
    constructor(){
        this.app = axios.create({
            // baseURL: 'http://localhost:5000/phones'
            baseURL: process.env.REACT_APP_BASE_URL + '/phones',
        })
    }

    getPhones = () => this.app.get('/')
    getPhone = phone_id => this.app.get(`phone/${phone_id}`)
    newPhone = phone_info => this.app.post('/new', phone_info)
    editPhone = (phone_id, phone_info) => this.app.put(`/edit/${phone_id}`, phone_info)

}

export default PhonesService