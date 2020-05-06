import * as c from './../actions/ActionTypes';

const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case c.LOGIN_ERROR:
      return {
        ...state, 
        authError: 'Login failed'
      }
    case c.LOGIN_SUCCESS:
      console.log('Login success');
      return {
        ...state,
        authError: null
      }  
    default:
      return state; 
  }        
}

export default authReducer;