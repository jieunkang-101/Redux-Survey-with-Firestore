import React from 'react';
import PropTypes from 'prop-types';

function FlashMessage(props) {
  if (props.successMsg.length > 0) {
    return <div>{props.successMsg}</div>
  } else if (props.errorMsg.length > 0) {
    return <div>{props.errorMsg}</div>
  } else {
    return;
  }
}

FlashMessage.propTypes = {
  successMsg: PropTypes.string,
  errorMsg: PropTypes.string
}

export default FlashMessage;