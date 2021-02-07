import React, { Component } from 'react';
import './App.css';
import  SideNav from './Components/SideNav/sidenav';
import Router from './Router';
class App extends Component {
render() {
return (
<div className="App">
<SideNav/>
<Router/>
</div>
);
}
}
export default App;