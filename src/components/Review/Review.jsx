import React from "react";
import PropTypes from "prop-types";

function Review(props) {
  return (
    <>
      <div className="card z-depth-0 review" onClick = {() => props.whenReviewClicked(props.id)}>
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Review</span>
          <p>{props.rating}</p>
          <p>{props.content}</p>
          <p className="grey-text">{props.postTime}</p>
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