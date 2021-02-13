import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './Components/Homepage/homepage';
import Bikes from './Components/Bikes/bikes';
import buildInquiry from './Components/BuildInquiry/buildInquiry';
import serviceAppointment from './Components/ServiceAppointment/serviceAppointment';
import shop from './Components/Shop/shop';
import events from './Components/Events/events';
import careers from './Components/Careers/careers';
import signIn from './Components/SignIn/signIn';


const Router = (props) => (
<Switch>
<Route exact path='/' component={HomePage}/>
<Route path="/bikes" component={Bikes} />
<Route exact path='/buildInquiry' component={buildInquiry}/>
<Route path="/serviceAppointment" component={serviceAppointment} />
<Route path="/shop" component={shop} />
<Route path="/events" component={events} />
<Route path="/careers" component={careers} />
<Route path="/signIn" component={signIn} />
</Switch>
)


export default Router;