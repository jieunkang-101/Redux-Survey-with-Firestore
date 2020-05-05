import React from 'react';
import NewReviewForm from './NewReviewForm';
import ReviewList from './ReviewList';
import { connect } from 'react-redux';
// import PropTypes from "prop-types";
// import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';


class ReviewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedReview: null,
      editing: false
    };
  }

  handleReviewClick = () => {
    if (this.state.selectedReview != null) {
      this.setState({
        selectedReview: null,
        editing: false
      });
    } 
  }

  handleChangingSelectedReview = (id) => {
    this.props.firestore.get({collection: 'reviews', doc: id}).then((review) => {
      const firestoreReview = {
        rating: review.get("rating"),
        review: review.get("review"),
        postTime: review.get("postTime"),
        id: review.id
      }
      this.setState({selectedReview: firestoreReview });
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }


  render() {
    return (
      <>
      <p>Welcome!</p>
      <ReviewList />
      <NewReviewForm />
      </>
    )
  }
}

ReviewControl.propTypes = {};
const mapStateToProps = (state) => {
  return state;
};

ReviewControl = connect(mapStateToProps)(ReviewControl);
export default withFirestore(ReviewControl);