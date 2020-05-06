import React from 'react';
import Review from './Review';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function ReviewList(props) {
  useFirestoreConnect([ { collection: 'reviews' } ]);
  const reviews = useSelector((state) => state.firestore.ordered.reviews);
  if (isLoaded(reviews)) {
    return (
      <div className="review-list section">
      {reviews.map((review) => {
        return <Review
          whenReviewClicked = {props.onReviewSelection}
          rating = {review.rating}
          content = {review.content}
          id={review.id}
          key = {review.id} />
      })}
      </div>
    )
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }
}  

ReviewList.propTypes = {
  onReviewSelection: PropTypes.func
};

export default ReviewList;
