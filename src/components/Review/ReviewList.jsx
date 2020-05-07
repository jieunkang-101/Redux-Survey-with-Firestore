import React from 'react'
import Review from './Review'
import { Link } from 'react-router-dom'
/// import { connect } from 'react-redux'

// const ReviewList = (props, {reviews} ) => {
//   return (
//     <div className="review-list section">
//       { reviews && reviews.map(review => {
//         return (
//           <Link to={'/review/' + review.id} key={review.id}>
//             <Review review={review} />
//           </Link>    
//         )
//       })}
//     </div>
//   )
// }

// const ReviewList = (props) => {
//   return (
//     <div className="review-list section">
//       { props.reviews && props.reviews.map(review => {
//         return (
//           <Link to={'/review/' + review.id} key={review.id}>
//             <Review review={review} />
//           </Link>    
//         )
//       })}
//     </div>
//   )
// }

const ReviewList = ({reviews}) => {
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

export default ReviewList;


// const mapStateToProps = (state) => {

//   return {
//     reviews: state.firestore.ordered.reviews,
//     auth: state.firebase.auth
//   }
// }

// export default connect(mapStateToProps)(ReviewList)
