import { connect } from 'react-redux'

import React, { Component } from 'react';
import { Login } from "./Login";

class PreLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.state, mobileNoRes: 10 }
        console.log("PROPS", props);
        console.log("STATE", this.state);
    }
    render() {
        return (<div className="page-wrapper ">
            <p>PreLogin</p>
            <Login preLoginState={this.props} />
        </div>)
    }
}
function mapStateToProps(state) { return { notes: state.notes } }

// export default PreLogin;
export default connect(mapStateToProps)(PreLogin);
