import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Component} from 'react'
import Routes from './Routes'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import AuthService from '../services/auth.service'
import Alert from './shared/Alert'


class App extends Component {

  constructor(){
    super()
    this.state = { 
      loggedUser: undefined,
      alert: { show: false, text: '', variant: 'info' }
     }
    this.authService = new AuthService()
  }

  storeUser = loggedUser => this.setState({loggedUser})

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(theLoggedUser => this.storeUser(theLoggedUser.data))
      .catch(() => this.storeUser(undefined))

  } 

  showAlert = (text, variant) => this.setState({ alert: { show: true, text, variant } })

  closeAlert= () => this.setState({ alert: { ...this.state.alert, show: false } })

  componentDidMount = () => this.fetchUser()



  render(){

    return (
      <>
        <Navbar storeUser={this.storeUser} loggedUser={this.state.loggedUser} showAlert={this.showAlert}/>
        <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} showAlert={this.showAlert}/>
        <Footer/>
        <Alert show={this.state.alert.show} text={this.state.alert.text} variant={this.state.alert.variant} closeAlert={this.closeAlert}/>
      </>
      
    )
  }


}

export default App;


// variant options: [
//   'Primary',
//   'Secondary',
//   'Success',
//   'Danger',
//   'Warning',
//   'Info',
//   'Light',
//   'Dark',
// ]
