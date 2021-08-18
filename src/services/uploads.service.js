import axios from 'axios'

class UploadsService {

    constructor() {
        this.app = axios.create({
            // baseURL: 'http://localhost:5000/upload',
            baseURL: process.env.REACT_APP_BASE_URL + '/upload',
            withCredentials: true
        })
    }

    uploadimage = imageForm => this.app.post('/image', imageForm)
}

export default UploadsService