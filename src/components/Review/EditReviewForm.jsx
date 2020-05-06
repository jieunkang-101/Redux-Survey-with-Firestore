import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditReviewForm (props) {
  const firestore = useFirestore();
  const { review } = props;

  function editReviewToFirestore(event) {
    event.preventDefault();
    props.onEditReview();
    const propertiesToUpdate = {
      rating: event.target.rating.value,
      review: event.target.review.value,
      postTime: firestore.FieldValue.serverTimestamp()
    }
    return firestore.update({collection: 'reviews', doc: review.id }, propertiesToUpdate);
  }

  return (
    <div className="container">
      <form onSubmit = { editReviewToFirestore } className="white">
      {/* <form onSubmit = { this.handleSubmit } className="white"> */}
        <h5 className="grey-text text-darken-3">Edit Review</h5>
        <label>
          <input type="radio" name="rating" value="1" />
          <span>1</span>
        </label>
        <label>
          <input type="radio" name="rating" value="2" />
          <span>2</span>
        </label>
        <label>
          <input type="radio" name="rating" value="3" />
          <span>3</span>
        </label>
        <label>
          <input type="radio" name="rating" value="4" />
          <span>4</span>
        </label>
        <label>
          <input type="radio" name="rating" value="5" />
          <span>5</span>
        </label>
        <textarea name="content" id="" cols="30" rows="10" className="materialize-textarea"  placeholder='What did you think of the movie?(optional)'></textarea>
        <button className="btn pink lighten-1 z-depth-0">Update</button>
      </form>
    </div>
  );
}

EditReviewForm.propTypes = {
  onEditReview: PropTypes.func
};

export default EditReviewForm;