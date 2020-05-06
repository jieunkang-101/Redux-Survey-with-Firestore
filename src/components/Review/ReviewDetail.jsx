import React from "react";
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ReviewDetail(props) {
  // const id = props.match.params.id;
  // console.log("props", props);
  const { review, onClickingDelete } = props;
  if (review) {
    return (
      <div className="container section review-detail">
        <div className="card z-depth-o">
          <div className="card-content">
            <span className="card-title">{review.movieTitle}</span>
            <p>{review.rating}</p>
            <p>{review.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {review.authorFirstName} {review.authorLastName}</div>
            <div>{review.createAt}</div>
          </div>
        </div>
          <button onClick={ props.onClickingEdit }>Update Review</button>
          <button onClick={()=> onClickingDelete(review.id) }>Delete Review</button>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading review...</p>
      </div>
    )
  }  
}

// ReviewDetail.propTypes = {
//   review: PropTypes.array,
//   onClickingDelete: PropTypes.func,
//   onClickingEdit: PropTypes.func
// };

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const reviews = state.firestore.data.reviews;
  const review = reviews ? reviews[id] : null;
  return {
    review: review
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'reviews' }
  ])
)(ReviewDetail);