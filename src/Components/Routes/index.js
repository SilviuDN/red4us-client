import {Switch, Route, Redirect} from 'react-router-dom'
import IndexPage from '../pages/IndexPage/IndexPage'
import PhonesPage from '../pages/Phones/PhonesPage'
import PhoneDetailsPage from '../pages/Phones/PhoneDetailsPage'
import PhoneForm from '../pages/Phones/PhoneForm'
import PhoneFormEdit from '../pages/Phones/PhoneFormEdit'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import UserProfile from '../pages/Users/UserProfile'

const Routes = ({storeUser, loggedUser, showAlert}) => {

    return(
        <Switch>
            <Route path = '/' exact render = { () => <IndexPage/> } />
            <Route path = '/phones' exact render = { () => <PhonesPage loggedUser={loggedUser} showAlert={showAlert}/>} />
            <Route path = '/phones/new' render = { () => <PhoneForm  showAlert={showAlert}/>} />
            <Route path = '/phones/:phone_id' exact render = { (props) => <PhoneDetailsPage {...props}  loggedUser={loggedUser}/>} />
            <Route path = '/phones/:phone_id/edit' render = { (props) => <PhoneFormEdit {...props}/>} />
            <Route path = '/signup' render = { props => <Signup {...props} showAlert={showAlert}/>} />
            <Route path = '/login' render = { props => <Login {...props} storeUser={storeUser} showAlert={showAlert}/>}/>
            <Route path = '/myProfile' render = { () => loggedUser ? <UserProfile loggedUser={loggedUser} /> : <Redirect to='/phones'/> }/>

        </Switch>
    )
}

export default Routes