import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../../actions/reviewActions'
import { Redirect } from 'react-router-dom'

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
    this.props.createReview(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const  mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReviewForm)