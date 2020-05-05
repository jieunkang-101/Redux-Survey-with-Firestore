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
    <React.Fragment>
      <div className="form-card">
        <form onSubmit = { editReviewToFirestore } className="form-group">
          <div className="form-check form-check-inline">
            <input className="form-check-input"  type='radio' name='rating' value="1" />
            <label className='form-check-label' for='rating1'>1</label>
            <input className="form-check-input"  type='radio' name='rating' value="2" />
            <label className='form-check-label' for='rating2'>2</label>
            <input className="form-check-input"  type='radio' name='rating' value="3" />
            <label className='form-check-label' for='rating3'>3</label>
            <input className="form-check-input"  type='radio' name='rating' value="4" />
            <label className='form-check-label' for='rating4'>4</label>
            <input className="form-check-input"  type='radio' name='rating' value="5" />
            <label className='form-check-label' for='rating5'>5</label>
          </div>
          <div className="form-group">
            <textarea name='review' placeholder='What did you think of the movie?(optional)' />
          </div>
          <button type='submit' className="btn btn-outline-info">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
}

EditReviewForm.propTypes = {
  onEditReview: PropTypes.func
};

export default EditReviewForm;