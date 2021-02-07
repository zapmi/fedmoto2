import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Public from './Components/public';
import Private from './Components/private';
import HomePage from './Components/Homepage/homepage';


const Router = (props) => (
<Switch>
<Route exact path='/' component={HomePage}/>
<Route exact path='/public' component={Public}/>
<Route path="/private" component={Private} />
</Switch>
)


export default Router;