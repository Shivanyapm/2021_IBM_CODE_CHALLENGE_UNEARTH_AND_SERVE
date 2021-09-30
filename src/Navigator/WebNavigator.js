import React from 'react'
import Dashboard from '../Pages/Dashboard';
// import Dashboard1 from '../Pages/Dashboard1';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import About from '../Pages/About';
import ForgotPassword from '../Pages/Forgotpwd';
import Signup from '../Pages/Signup';
import AdminHome from '../Pages/AdminHome';
import SponsorHome from '../Pages/SponsorHome';
import SponsorDetails from '../Pages/SponsorDetails';
import TrainedDetails from '../Pages/TrainData';
import Health from '../Pages/Health';
import Bdetails from '../Pages/Bdetails';
import Education from '../Pages/Education';
import Payment from '../Pages/Payment';
import complete from '../Pages/Complete';
import bpay from '../Pages/Bpay'
import complete1 from '../Pages/complete1'
import eligibility from '../Pages/Eligibility';
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
                    <Route path='/sdetails' exact component={SponsorDetails} />
                    <Route path='/details' exact component={TrainedDetails} />
                    <Route path='/bdetails' exact component={Bdetails} />
                    <Route path='/Education' exact component={Education} />
                    <Route path='/Health' exact component={Health} />
                    <Route path='/Payment' exact component={Payment} />
                    <Route path='/complete' exact component={complete} />
                    <Route path='/complete1' exact component={complete1} />
                    <Route path='/bpay' exact component={bpay} />
                    <Route path='/eligibility' exact component={eligibility} />
                </Switch>
            </Router>
        </div>
    )
}

export default WebNavigator