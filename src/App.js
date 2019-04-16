import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu';
import Profile from './components/profile';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Col} from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        

        <div className="container">
            <Menu />
            <Profile />
        </div> 
        
      </div>
    );
  }
}

export default App;
