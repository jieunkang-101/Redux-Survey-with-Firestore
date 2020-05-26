import React from 'react';
import Review from './Review';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const UserPage = (props) => {
  const { auth } = props;

  if (auth.uid) {
    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">My Reviews</span>
            {props.reviews && props.reviews.map(review => {
              if (review.authorId === auth.uid) {
                return (
                  <Link to={'/review/' + review.id} key={review.id}>
                  <Review review={review} />
                  </Link>
                );
              } 
              return null;
            })}
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
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(UserPage);