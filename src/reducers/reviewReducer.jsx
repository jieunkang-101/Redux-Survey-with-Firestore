import * as c from './../actions/ActionTypes';

const initState = {
  selectedReview: null,
  reviewActionError: null
};

const reviewReducer = (state=initState, action) => {
  const { id } = action;
  switch (action.type) {
    case c.CREATE_REVIEW:
      console.log("created review", action.review);
      return state;
    case c.CREATE_REVIEW_ERROR:
      console.log("create review error", action.err);
      return {
        ...state,
        reviewActionError: action.err.message
      } 
    case c.SELECT_REVIEW:
      return Object.assign({}, state, { selectedReview: id });  
    case c.UPDATE_REVIEW:
      console.log("updated review", action.review);
      return state;
    case c.UPDATE_REVIEW_ERROR:
      console.log("update review error", action.err);
      return {
        ...state,
        reviewActionError: action.err.message
      }   
    case c.DELETE_REVIEW:
      console.log("deleted review", action.review);   
    case c.DELETE_REVIEW_ERROR:
      console.log("delete review error", action.err);
      return {
        ...state,
        reviewActionError: action.err.message
      } 
    default:
      return state;     
  }
};

export default reviewReducer;