import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Step0 } from './Step0'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Result } from './Result'
import { OtherFeatures } from './OtherFeatures'
import "./scss/main.scss";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import UserProfile from "./components/UserProfile"
import Help from "./components/Help"
// import Admin from "./components/Admin"

// import SignIn from "./containers/Pages/signin"
import { Login } from "./components/Login"
import PreLogin from "./components/PreLogin"
import SignUp from "./components/SignUp"

// import Auth from "./AuthApi";

function App() {
  return (
    // <AuthApi.Provider value={{ auth, setAuth }}>
    <Router>
      <Navbar />
      <Sidebar />
      <Route exact path="/" component={Step0} />
      <Route exact path="/step1" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/step3" component={Step3} />
      <Route path="/step4" component={Step4} />
      <Route path="/result" component={Result} />
      <Route path="/other-features" component={OtherFeatures} />
      <Route path="/profile" component={UserProfile} />
      <Route path="/help" component={Help} />
      {/* <Route path="/login" component={PreLogin} /> */}
      {/* <Route path="/signIn" component={SignIn} /> */}
      {/* <Route path="/signup" component={SignUp} /> */}
      {/* <Routes /> */}
      <Footer />
    </Router>
    // </AuthApi.Provider>
  )
}
// const Routes = () => {
//   // const Auth = React.useContext(AuthApi)
//   return (
//     <Switch>
//       {/* <Route path="/login" component={Login} /> */}
//       {/* <Route path="/signup" component={SignUp} /> */}
//       {/* <ProtectedRoute path="/profile" auth={Auth.auth} component={UserProfile} /> */}
//       {/* <PrivateRoute path="/admin" component={Admin} /> */}
//     </Switch>
//   )
// }

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       Auth.getAuth() ? (<Component {...props} />) : (<Redirect to={{ pathname: "/login" }} />)
//     }
//   />
// );

export default App;
