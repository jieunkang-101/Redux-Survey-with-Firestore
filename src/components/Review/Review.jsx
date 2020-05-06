import React from "react";
import PropTypes from "prop-types";

function Review({review}) {
  return (
    <>
      {/* <div className="card z-depth-0 review" onClick = {() => props.whenReviewClicked(props.id)}> */}
      <div className="card z-depth-0 review">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{review.movieTitle}</span>
          <p>{review.rating}</p>
          <p className="grey-text">Posted by {review.authorFirstName} {review.authorLastName}</p>
        </div>
      </div>
    </>
  )
}

Review.propTypes = {
  rating: PropTypes.string.isRequired,
  content: PropTypes.string,
  whenReviewClicked: PropTypes.func
}

export default Review;