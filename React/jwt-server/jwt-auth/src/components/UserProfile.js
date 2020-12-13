import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from "react-redux"
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ReactDOM from "react-dom"
import logo from '../images/tm-logo.png'; // Tell webpack this JS file uses this image
import loadingSpinner from "./loadingSpinner"

class UserProfile extends Component {

  render() {
    return (<div class="page-wrapper ">
    Profile
        <ul>
            <li><Link  to="/help">Help</Link></li>
            <li><Link  to="/step1">Health Articals</Link></li>
            <li><Link  to="/step1">TrueMed's Doctors</Link></li>
            <li><Link  to="/step1">Settings</Link></li>
            <li><Link  to="/step1">Legal</Link></li>
            <li><Link  to="/step1">About Us</Link></li>
        </ul>
    </div>
    )
  }
}
export default UserProfile;