import axios from 'axios'

class AuthService{
    
    constructor(){
        this.app = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL + '/',
            withCredentials: true
        })
    }

    login = (username, pwd) => this.app.post('/login', {username, pwd})
    signup = (username, pwd) => this.app.post('/signup', {username, pwd})
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isLoggedIn')

}

export default AuthService