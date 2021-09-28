import React from 'react'
import Dashboard from '../Pages/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import About from '../Pages/About';
import ForgotPassword from '../Pages/Forgotpwd';
import Signup from '../Pages/Signup';
import AdminHome from '../Pages/AdminHome';
import SponsorHome from '../Pages/SponsorHome';
const WebNavigator = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/Login' exact component={Login} />
                    <Route path='/About' exact component={About} />
                    <Route path='/ForgotPassword' exact component={ForgotPassword} />
                    <Route path='/Signup' exact component={Signup} />
                    <Route path='/AdminHomePage' exact component={AdminHome} />
                    <Route path='/SponsorHomePage' exact component={SponsorHome} />
                </Switch>
            </Router>
        </div>
    )
}

export default WebNavigator