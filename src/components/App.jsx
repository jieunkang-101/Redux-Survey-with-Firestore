import React from "react"
import Dashboard from './dashboard/Dashboard'
import SignUp from "./auth/SignUp"
import SignIn from "./auth/SignIn"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import '../index.css'
import Navbar from "./layout/NavBar"
import ReviewDetail from "./review/ReviewDetail"
import NewReviewForm from './review/NewReviewForm'
import EditReviewForm from './review/EditReviewForm'
import UserPage from './review/UserPage'

function App(){
  return ( 
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/review/:id' component={ReviewDetail} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={NewReviewForm} />
          <Route path="/edit" component={EditReviewForm} />
          <Route path="/userpage" component={UserPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App