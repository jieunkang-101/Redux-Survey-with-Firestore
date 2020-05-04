import React from "react";
import Header from "./Header";
// import Footer from './Footer';
import ReviewControl from "./Review/ReviewControl";
import Register from "./Register";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';

function App(){

  return ( 
    <Router>
    <Header />
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/signin" component={Signin} />
      <Route path="/" component={ReviewControl} />
    </Switch>
    </Router>
  )
}

export default App;