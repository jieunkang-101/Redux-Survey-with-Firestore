import React from 'react';

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
      </>
    )
  }
}

export default ReviewControl;