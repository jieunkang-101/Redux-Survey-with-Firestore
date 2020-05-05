import React from "react";
import PropTypes from "prop-types";

export default function ReviewDetail(props) {
  const { review, onClickingDelete } = props;
  return (
    <div className="container section review-detail">
      <div className="card z-depth-o">
        <div className="card-content">
          <span className="card-title">Review Detials</span>
          <p>{review.rating}</p>
          <p>{review.review}</p>
        </div>
        <div className="card-action grey lighten-4 grey-test">
         <button onClick={ props.onClickingEdit }>Update Review</button>
         <button onClick={()=> onClickingDelete(review.id) }>Delete Review</button>
        </div>
      </div>
    </div>
  )
}

ReviewDetail.propTypes = {
  review: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
