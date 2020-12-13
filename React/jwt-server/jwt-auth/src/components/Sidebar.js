import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from "react-redux"
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ReactDOM from "react-dom"

//Animation Libraryes
// import { Motion, spring, StaggeredMotion } from 'react-motion';

class Sidebar extends Component {
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
    //Toggole Function
    // _toggle() {
    //     this.setState((prevState) => {
    //         return {
    //             isOn: !prevState.isOn
    //         }
    //     })
    // }


    render() {
        //const value = this.state.isOn ? 1 : 0
        return (<div className="sidebar-container">


            <div id="sidebar" className={this.state.isToggleOn ? 'closed' : 'open'} >
                <ul className="sidebar-nav">
                    LIST                </ul>

                {/* <button onClick={this._toggle}>Toggle</button>

            <Motion
                defaultStyle={{ opacity: 0, y: 0 }}
                style={{
                    opacity: spring(value, { stiffness: 100 }),
                    y: spring(value, { stiffness: 100 })
                }}>

                {(interpolatingStyle) => {
                    const styles = { opacity: 1 }

                    return (<div id="sidebar" style={{
                        ...styles,
                        transform: `scaleY(${interpolatingStyle.y})`
                    }} >
                        
                    </div>)
                }}
            </Motion> */}
            </div>
        </div>)
    }
}


export default Sidebar;