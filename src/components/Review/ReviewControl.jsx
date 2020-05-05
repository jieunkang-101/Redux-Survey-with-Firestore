import React from 'react';
import ReviewList from './ReviewList';
import ReviewDetail from './ReviewDetail';
import NewReviewForm from './NewReviewForm';
import EditReviewForm from './EditReviewForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
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

  handleEditingReviewInList = () => {
    this.setState({
      editing: false,
      selectedReview: null
    });
  }

  handleDeletingReview = (id) => {
    this.props.firestore.delete({collection: 'reviews', doc: id});
    this.setState({selectedReview: null});
  }

  setVisibility = () => {
    if (this.state.editing) {
      return (
        <EditReviewForm 
          review = { this.state.selectedReview }
          onEditReview = { this.handleEditingReviewInList }  
        />
      );
    } else if (this.state.selectedReview != null) {
      return (
        <ReviewDetail 
          review = { this.state.selectedReview } 
          onClickingDelete = {this.handleDeletingReview} 
          onClickingEdit = {this.handleEditClick}
        />
      );
    } else {
      return (
        <>
          <ReviewList 
            onReviewSelection = { this.handleChangingSelectedReview } />
          <NewReviewForm />
        </>
      );
    }
  }

  render() {
    console.log("State", this.state);
    return (
      <>
      { this.setVisibility() }
      </>
    )
  }
}

ReviewControl.propTypes = {};

// const mapStateToProps = (state) => {
//   return state;
// };

// ReviewControl = connect(mapStateToProps)(ReviewControl);
export default withFirestore(ReviewControl);