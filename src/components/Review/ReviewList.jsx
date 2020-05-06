import React from 'react';
import Review from './Review';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

const ReviewList = ({reviews}) => {
  return (
    <div className="review-list section">
      { reviews && reviews.map(review => {
        return (
          <Link to={'/review/' + review.id} key={review.id}>
            <Review 
              // review={review} 
              movieTitle = {review.movieTitle} 
              rating = {review.rating}
              content = {review.content}
              key={review.id} />
          </Link>    
        )
      })}
    </div>
  )
}

export default ReviewList;

// function ReviewList(props) {
//   useFirestoreConnect([ { collection: 'reviews' } ]);
//   const reviews = useSelector((state) => state.firestore.ordered.reviews);
//   if (isLoaded(reviews)) {
//     return (
//       <div className="review-list section">
//         <h3>Reviews List</h3>
//       {reviews.map((review) => {
//         return <Review
//           whenReviewClicked = {props.onReviewSelection}
//           movieTitle = {review.movieTitle}
//           rating = {review.rating}
//           content = {review.content}
//           id={review.id}
//           key = {review.id} />
//       })}
//       </div>
//     )
//   } else {
//     return (
//       <>
//         <h3>Loading...</h3>
//       </>
//     )
//   }
// }  

// ReviewList.propTypes = {
//   onReviewSelection: PropTypes.func
// };

// export default ReviewList;
