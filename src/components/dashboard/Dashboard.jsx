import React, { Component } from 'react';
import Notifications from './Notifications';
import ReviewList from '../review/ReviewList';
import ReviewControl from "../review/ReviewControl";
import NewReviewForm from '../review/NewReviewForm';
import { connect } from 'react-redux';

class Dashboard extends Component {
  

  render(){
    const { reviews } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ReviewList reviews={reviews} />
            {/* <ReviewControl /> */}
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.review.reviews
  }
}


export default connect(mapStateToProps)(Dashboard);