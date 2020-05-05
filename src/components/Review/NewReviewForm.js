import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function NewReviewForm(props) {
  const firestore = useFirestore();

  function addReviewToFirestore(event) {
    event.preventDefault();
    props.onNewReviewCreation();
    return firestore.collection('reviews').add({
      rating: event.target.rating.value,
      review: event.target.review.value,
      postTime: firestore.FieldValue.serverTimestamp()
    });
  }

  return (
    <>
      <div className="form-card">
        <form onSubmit = { addReviewToFirestore } className="form-group">
          <div className="form-check form-check-inline">
            <input className="form-check-input"  type='radio' name='rating' value="1" />
            <label className='form-check-label' htmlFor='rating1'>1</label>
            <input className="form-check-input"  type='radio' name='rating' value="2" />
            <label className='form-check-label' htmlFor='rating2'>2</label>
            <input className="form-check-input"  type='radio' name='rating' value="3" />
            <label className='form-check-label' htmlFor='rating3'>3</label>
            <input className="form-check-input"  type='radio' name='rating' value="4" />
            <label className='form-check-label' htmlFor='rating4'>4</label>
            <input className="form-check-input"  type='radio' name='rating' value="5" />
            <label className='form-check-label' htmlFor='rating5'>5</label>
          </div>
          <div className="form-group">
            <textarea name='review' placeholder='What did you think of the movie?(optional)' />
          </div>
          <button type='submit' className="btn btn-outline-info">Submit</button>
        </form>
      </div>
    </>
  );
}

NewReviewForm.propTypes = {
  onNewReviewCreation: PropTypes.func
};

export default NewReviewForm;