import * as c from './ActionTypes';

export const createReview = (review) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: c.CREATE_REVIEW, review });
  }
};