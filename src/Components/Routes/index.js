import {Switch, Route} from 'react-router-dom'
import IndexPage from '../pages/IndexPage/IndexPage'
import PhonesPage from '../pages/Phones/PhonesPage'
import PhoneDetailsPage from '../pages/Phones/PhoneDetailsPage'
import PhoneForm from '../pages/Phones/PhoneForm'

const Routes = () => {

    return(
        <Switch>
            <Route path = '/' exact render = { () => <IndexPage/> } />
            <Route path = '/phones' exact render = { () => <PhonesPage/>} />
            <Route path = '/phones/new' render = { () => <PhoneForm />} />
            <Route path = '/phones/:phone_id' render = { (props) => <PhoneDetailsPage {...props}/>} />
        </Switch>
    )
}

export default Routes