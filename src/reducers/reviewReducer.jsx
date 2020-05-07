import * as c from './../actions/ActionTypes'

const reviewReducer = (state, action) => {
  switch (action.type) {
    case c.CREATE_REVIEW:
      console.log("created review", action.review);
      return state;
    case c.CREATE_REVIEW_ERROR:
      console.log("create review error", action.err);
      return state;  
    case c.UPDATE_REVIEW:
      console.log("updated review", action.review);
      return state;
    case c.UPDATE_REVIEW_ERROR:
      console.log("update review error", action.err);
      return state;    
    default:
      return state;     
  }
}

export default reviewReducer