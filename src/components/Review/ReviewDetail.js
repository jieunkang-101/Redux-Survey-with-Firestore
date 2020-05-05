import React from "react";
import PropTypes from "prop-types";

function ReviewDetail(props) {
  const { review, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Review Detail</h1>
      {/* <h3>{review.rating}</h3>
      <p>{review.review}</p>
      <button onClick={ props.onClickingEdit }>Update Review</button>
      <button onClick={()=> onClickingDelete(review.id) }>Delete Review</button> */}
      <hr/>
    </React.Fragment>
  );
}

ReviewDetail.propTypes = {
  review: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ReviewDetail;