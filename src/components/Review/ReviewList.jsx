import React from 'react'
import Review from './Review'
import { Link } from 'react-router-dom'

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

export default ReviewList