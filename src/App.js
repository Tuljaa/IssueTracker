import './App.css';
import {Route,Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Register from './components/RegisterUser'
import AddIssue from './components/AddIssue'
import DeleteIssue from './components/DeleteIssue'
import UpdateIssue from './components/UpdateIssue'
import HomePage from './components/HomePage'
import MyAccount from './components/MyAccount'
import About from './components/About'
import Logout from './components/Logout'

function App() {

  return (
    <div className="App">
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                        <Route  path="/home" component={HomePage} />
                        <Route  path="/login" component={Login}/>
                        <Route  path="/register" component={Register}/>

                        <Route  path="/add" component={AddIssue}/>
                        <Route  path="/delete/:index" component={DeleteIssue}/>
                        <Route  path="/update" component={UpdateIssue}/>
                        <Route  path="/myaccount" component={MyAccount}/>
                        <Route  path='/about' component={About}/>
                        <Route  path='/logout' component={Logout}/>

                    </Switch>
    </div>
  );
}

export default App;
