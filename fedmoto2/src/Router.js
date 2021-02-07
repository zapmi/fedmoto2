import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Public from './Components/public';
import Private from './Components/private';
import HomePage from './Components/Homepage/homepage';
import Bikes from './Components/Bikes/bikes';


const Router = (props) => (
<Switch>
<Route exact path='/' component={HomePage}/>
<Route exact path='/public' component={Public}/>
<Route path="/private" component={Private} />
<Route path="/bikes" component={Bikes} />
</Switch>
)


export default Router;