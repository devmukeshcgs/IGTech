import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { connect } from "react-redux";

import App from "./App";
import { Login } from "./components/Login"
import SignUp from "./components/SignUp"
import Admin from "./components/Admin"

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isLoggedIn ? (<Component {...props} />) : (<Redirect to={{ pathname: "/signin" }} />
            )
        }
    />
);
const PublicRoutes = ({ history, isLoggedIn }) => {
    return (
        <ConnectedRouter history={history}>
            {/* <Route
                exact
                path={"/login"}
                component={Login}
            />
            <Route
                exact
                path={"/signup"}
                component={SignUp}
            /> */}
            <RestrictedRoute
                path="/admin"
                component={Admin}
                isLoggedIn={isLoggedIn}
            />
        </ConnectedRouter>
    )
}
export default connect(state => ({
    isLoggedIn: state.Auth.idToken !== null
}))(PublicRoutes);