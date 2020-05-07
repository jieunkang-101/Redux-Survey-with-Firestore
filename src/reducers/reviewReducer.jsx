import * as c from './../actions/ActionTypes'

const initState = {
  selectedReview: null
}

const reviewReducer = (state=initState, action) => {
  const { id } = action;
  switch (action.type) {
    case c.CREATE_REVIEW:
      console.log("created review", action.review);
      return state;
    case c.CREATE_REVIEW_ERROR:
      console.log("create review error", action.err);
      return state;  
    case c.SELECT_REVIEW:
      return Object.assign({}, state, { selectedReview: id });  
    case c.UPDATE_REVIEW:
      console.log("updated review", action.review);
      return state;
    case c.UPDATE_REVIEW_ERROR:
      console.log("update review error", action.err);
      return state;   
    case c.DELETE_REVIEW:
      console.log("deleted review", action.review);   
    default:
      return state;     
  }
}

export default reviewReducer