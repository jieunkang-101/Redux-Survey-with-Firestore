import React, { Component } from 'react';
import Notifications from './Notifications';
import ReviewList from '../review/ReviewList';
import ReviewControl from "../review/ReviewControl";
import NewReviewForm from '../review/NewReviewForm';

class Dashboard extends Component {

  render(){
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {/* <ReviewList /> */}
            <ReviewControl />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;