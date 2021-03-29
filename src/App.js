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
                        <Route  exact path="/home" component={HomePage} />
                        <Route  exact path="/login" component={Login}/>
                        <Route  exact path="/register" component={Register}/>

                        <Route  exact path="/add" component={AddIssue}/>
                        <Route  exact path="/delete/:index" component={DeleteIssue}/>
                        <Route  exact path="/update" component={UpdateIssue}/>
                        <Route exact path="/myaccount" component={MyAccount}/>
                        <Route  exact path='/about' component={About}/>
                        <Route  exact path='/logout' component={Logout}/>

                    </Switch>
    </div>
  );
}

export default App;
