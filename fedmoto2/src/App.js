import React, { Component } from 'react';
import './App.css';
import  SideNav from './Components/SideNav/sidenav';
import Router from './Router';
import Footer from './Components/Footer/footer';

class App extends Component {
render() {
return (
<div className="App">
<SideNav/>
<Router/>
<Footer/>
</div>
);
}
}
export default App;