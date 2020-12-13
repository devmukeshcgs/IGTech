import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from "react-redux"
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ReactDOM from "react-dom"
import logo from '../images/tm-logo.png'; // Tell webpack this JS file uses this image
import loadingSpinner from "./loadingSpinner"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
    //this._toggle = this._toggle.bind(this)
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (<div className="navigation">
      <div className="burger-icon" onClick={this.handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div className="register">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
      {/* <div className="sidebar-container">
        <div id="sidebar" className={this.state.isToggleOn ? 'closed' : 'open'} >
          <ul className="sidebar-nav">
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/step1">Health Articals</Link></li>
            <li><Link to="/step1">TrueMed's Doctors</Link></li>
            <li><Link to="/step1">Settings</Link></li>
            <li><Link to="/step1">Legal</Link></li>
            <li><Link to="/step1">About Us</Link></li>
          </ul>
        </div>
      </div> */}
    </div>
    )
  }
}
export default Navbar;