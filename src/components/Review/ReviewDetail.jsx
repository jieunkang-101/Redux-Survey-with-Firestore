import React from "react"
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { NavLink } from "react-router-dom"
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteReview, selectReview } from '../../actions/reviewActions'

function ReviewDetail(props) {
  const { review, auth } = props;
  
  if (!auth.uid) return <Redirect to='/signin' />
 
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
            <div>{moment(review.createAt.toDate()).calendar()}</div>
          </div>
        </div>
          <button onClick={props.selectReview} className='btn pink lighten-1 z-depth-0'>  
            <NavLink to={'/edit'}>Updete Review</NavLink>
          </button>
          <button onClick={props.deleteReview} className='btn pink lighten-1 z-depth-0'>Delete Review</button>
      </div>
    )
  } else {
    return (
      <Redirect to='/' />
    )
  }  
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const reviews = state.firestore.data.reviews;
  const review = reviews ? reviews[id] : null;
  return {
    review: review,
    auth: state.firebase.auth,
    reviewId: id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    deleteReview: () => dispatch(deleteReview(id)),
    selectReview: () => dispatch(selectReview(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'reviews' }
  ])
)(ReviewDetail)