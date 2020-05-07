import React from 'react'
import Review from './Review'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ReviewList = (props, {reviews} ) => {
  // const { auth, thisReview } = props;
  // const a = Object.values(thisReview)[0];
  // console.log(a)
  // console.log(auth.uid);
  // if (auth.uid === )
  
  return (
    <div className="review-list section">
      { reviews && reviews.map(review => {
        return (
          <Link to={'/review/' + review.id} key={review.id}>
            <Review review={review} />
          </Link>    
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    thisReview: state.firestore.ordered,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(ReviewList)
