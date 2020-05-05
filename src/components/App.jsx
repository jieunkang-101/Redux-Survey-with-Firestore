import React from "react";
import Header from "./Header";
import ReviewControl from "./Review/ReviewControl";
import Register from "./User/Register";
import SignIn from "./User/SignIn";
import RatingPage from './Review/RatingPage';
import RatingListPage from './Review/RatingList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';


function App(){

  return ( 
    <Router>
    <Header />
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/signin" component={SignIn} />
      <Route path="/rating" component={RatingPage} />
      <Route path="/ratinglist" component={RatingListPage} />
      <Route path="/" component={ReviewControl} />
    </Switch>
    </Router>
  )
}

export default App;