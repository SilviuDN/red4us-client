import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Component} from 'react'
import Routes from './Routes'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import AuthService from '../services/auth.service'

class App extends Component {

  constructor(){
    super()
    this.state = { loggedUser: undefined }
    this.authService = new AuthService()
  }

  storeUser = loggedUser => this.setState({loggedUser})

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(theLoggedUser => this.storeUser(theLoggedUser.data))
      .catch(() => this.storeUser(undefined))

  } 

  componentDidMount = () => this.fetchUser()

  render(){

    return (
      <>
        <Navbar storeUser={this.storeUser} loggedUser={this.state.loggedUser}/>
        <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser}/>
        <Footer/>
      </>
      
    )
  }


}

export default App;
