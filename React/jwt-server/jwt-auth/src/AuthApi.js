// import React from "react";
// const AuthApi = React.createContext();
// export default AuthApi


const Auth = {
    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true;
    },
    signout() {
        this.isAuthenticated = false;
    },
    getAuth() {
        return this.isAuthenticated;
    }
};

export default Auth;