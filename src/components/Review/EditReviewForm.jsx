import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateReview } from '../../actions/reviewActions';

class EditReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      content: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateReview(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <form onSubmit = { this.handleSubmit } className="white">
          <h5 className="grey-text text-darken-3">Update Review</h5>
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
            <button className="btn pink lighten-1 z-depth-0 waves-effect">Update<i className="material-icons right">update</i></button>
          </div>
        </form>
      </div>
    );
  }
}

const  mapDispatchToProps = (dispatch) => {
  return {
    updateReview: (review) => dispatch(updateReview(review))
  }
}

export default connect(null, mapDispatchToProps)(EditReviewForm);