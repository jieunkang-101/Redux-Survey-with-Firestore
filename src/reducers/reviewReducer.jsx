import * as c from './../actions/ActionTypes';

const initState = {
  reviews: [
    { id: '1', rating: '5', content: 'A miracle of a film.' },
    { id: '2', rating: '4', content: 'Best beyond compare movie of all time. Its quite saddening at the end but it is worth a watch.' }
  ]
}

const reviewReducer = (state = initState, action) => {
  switch (action.type) {
    case c.CREATE_REVIEW:
      console.log("created review", action.review);
      return state;
    case c.CREATE_REVIEW_ERROR:
      console.log("create review error", action.err);
      return state;  
    default:
      return state;     
  }
}

export default reviewReducer;