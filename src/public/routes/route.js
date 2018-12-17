import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LandingPage from '../../home/screens/LandingPage';
import NotFoundPage from '../../home/screens/LandingPage';
import Login from '../../auth/screens/login';
import Register from '../../auth/screens/register';



const Router = ()=>(
    <BrowserRouter>
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </React.Fragment>
    </BrowserRouter>
)

export default Router;