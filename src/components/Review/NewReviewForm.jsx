import React, { Component } from 'react'
// import PropTypes from "prop-types";
// import { useFirestore } from "react-redux-firebase";
import { connect } from 'react-redux';
import { createReview } from '../../actions';

class NewReviewForm extends Component {
  state = {
    movieTitle: '',
    rating: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createReview(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit = { this.handleSubmit } className="white">
          <h5 className="grey-text text-darken-3">Add New Review</h5>
          <div className="input-field">
            <label htmlFor="movieTitle">Movie Title</label>
            <input type="text" id="movieTitle" onChange={this.handleChange} />
          </div>
          <label>
            <input type="radio" id="rating" name="rating" value="1" onChange={this.handleChange} />
            <span>1</span>
          </label>
          <label>
            <input type="radio" id="rating" name="rating" value="2" onChange={this.handleChange} />
            <span>2</span>
          </label>
          <label>
            <input type="radio" id="rating" name="rating" value="3" onChange={this.handleChange} />
            <span>3</span>
          </label>
          <label>
            <input type="radio" id="rating" name="rating" value="4" onChange={this.handleChange} />
            <span>4</span>
          </label>
          <label>
            <input type="radio" id="rating" name="rating" value="5" onChange={this.handleChange} />
            <span>5</span>
          </label>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea"  placeholder='What did you think of the movie?(optional)' onChange={this.handleChange}></textarea>
          </div>  
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0 waves-effect">Submit<i className="material-icons right">send</i></button>
          </div>
        </form>
      </div>
    );
  }
}

const  mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review))
  }
}

export default connect(null, mapDispatchToProps)(NewReviewForm);










// function NewReviewForm(props) {

//   const firestore = useFirestore();

//   function addReviewToFirestore(event) {
//     event.preventDefault();
//     return firestore.collection('reviews').add({
//       rating: event.target.rating.value,
//       content: event.target.content.value,
//       postTime: firestore.FieldValue.serverTimestamp()
//     });
//   }
//   return (
//     <>
//       <div className="container">
//         <form onSubmit = { addReviewToFirestore } className="white">
//           <h5 className="grey-text text-darken-3">Add New Review</h5>
//           <label>
//             <input type="radio" id="rating" name="rating" value="1" />
//             <span>1</span>
//           </label>
//           <label>
//             <input type="radio" id="rating2" name="rating" value="2" />
//             <span>2</span>
//           </label>
//           <label>
//             <input type="radio" id="rating3" name="rating" value="3" />
//             <span>3</span>
//           </label>
//           <label>
//             <input type="radio" id="rating4" name="rating" value="4" />
//             <span>4</span>
//           </label>
//           <label>
//             <input type="radio" id="rating5" name="rating" value="5" />
//             <span>5</span>
//           </label>
//           <div className="input-field">
//             <textarea id="content" className="materialize-textarea"  placeholder='What did you think of the movie?(optional)'></textarea>
//           </div>  
//           <div className="input-field">
//             <button className="btn pink lighten-1 z-depth-0">Submit</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default NewReviewForm;