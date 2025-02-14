import React from 'react';
import moment from 'moment';

function Review({review}) {
  return (
    <div className="card z-depth-0 review">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{review.movieTitle}</span>
        <p>{review.rating}</p>
        <p className="grey-text">Posted by {review.authorFirstName} {review.authorLastName}</p>
        <p className="grey-text">{moment(review.createAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default Review;