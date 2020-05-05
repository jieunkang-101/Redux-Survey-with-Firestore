import React from "react";
import NavBar from './layout/NavBar';
import Dashboard from './dashboard/Dashboard';
import ReviewControl from "./review/ReviewControl";
import Register from "./auth/Register";
import SignIn from "./auth/SignIn";
import SignOut from "./auth/SignOut";
import RatingPage from './review/RatingPage';
import RatingListPage from './review/RatingList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';
import Navbar from "./layout/NavBar";


function App(){

  return ( 
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={Dashboard} />
        </Switch>
        {/* <Route path="/register" component={Register} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/rating" component={RatingPage} />
        <Route path="/ratinglist" component={RatingListPage} />
        <Route path="/" component={ReviewControl} /> */}
  
      </div>
    </Router>
  )
}

export default App;