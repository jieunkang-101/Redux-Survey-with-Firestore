import React from 'react'
import Review from './Review'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const UserPage = (props) => {
  const { reviews, auth } = props;
  console.log(reviews);
  console.log(auth.uid);
  // console.log(Object.values(reviews));
  
  if (auth.uid) {
    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">My Reviews</span>
        {/* { reviews && reviews.map(review => {
          return (
            <Link to={'/review/' + review.id} key={review.id}>
              <Review review={review} />
            </Link>    
          )
        })} */}
      </div>
      </div>
      </div>
    )
  } else {
    return null;
  }
}  

const mapStateToProps = (state) => {
  console.log("myState", state);
  return {
    reviews: state.firestore.ordered.reviews,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(UserPage)