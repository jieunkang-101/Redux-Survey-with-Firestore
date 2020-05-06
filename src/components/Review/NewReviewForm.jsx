
import React, { Component } from 'react'
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

// class NewReviewForm extends Component {
//   state = {
//     rating: '',
//     content: ''
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//   }

function NewReviewForm(props) {

  const firestore = useFirestore();

  function addReviewToFirestore(event) {
    event.preventDefault();
    //props.onNewReviewCreation();
    return firestore.collection('reviews').add({
      rating: event.target.rating.value,
      content: event.target.content.value,
      postTime: firestore.FieldValue.serverTimestamp()
    });
  }

  // render() {
    return (
      <>
        <div className="container">
          <form onSubmit = { addReviewToFirestore } className="white">
          {/* <form onSubmit = { this.handleSubmit } className="white"> */}
            <h5 className="grey-text text-darken-3">Add New Review</h5>
            <label>
              <input type="radio" id="rating" name="rating" value="1" />
              <span>1</span>
            </label>
            <label>
              <input type="radio" id="rating2" name="rating" value="2" />
              <span>2</span>
            </label>
            <label>
              <input type="radio" id="rating3" name="rating" value="3" />
              <span>3</span>
            </label>
            <label>
              <input type="radio" id="rating4" name="rating" value="4" />
              <span>4</span>
            </label>
            <label>
              <input type="radio" id="rating5" name="rating" value="5" />
              <span>5</span>
            </label>
            <div className="input-field">
              <textarea id="content" className="materialize-textarea"  placeholder='What did you think of the movie?(optional)'></textarea>
            </div>  
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Submit</button>
            </div>
          </form>
        </div>
      </>
    );
  }


NewReviewForm.propTypes = {
  //onNewReviewCreation: PropTypes.func
};

export default NewReviewForm;