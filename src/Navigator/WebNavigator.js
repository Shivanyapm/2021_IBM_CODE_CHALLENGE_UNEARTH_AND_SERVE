import React from 'react'
import Dashboard from '../Pages/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const WebNavigator = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                </Switch>
            </Router>
        </div>
    )
}

export default WebNavigator