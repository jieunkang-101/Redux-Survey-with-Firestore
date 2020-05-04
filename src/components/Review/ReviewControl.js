import React from 'react';
import NewReviewForm from './NewReviewForm';

class ReviewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedReview: null,
      editing: false
    };
  }

  render() {
    return (
      <>
      <p>Welcome!</p>
      <NewReviewForm />
      </>
    )
  }
}

export default ReviewControl;