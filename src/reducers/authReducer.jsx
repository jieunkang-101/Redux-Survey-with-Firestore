import * as c from './../actions/ActionTypes'

const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case c.LOGIN_ERROR:
      return {
        ...state, 
        authError: action.err.message
      }
    case c.LOGIN_SUCCESS:
      console.log('Login success');
      return {
        ...state,
        authError: null
      }  
    case c.SIGNOUT_SUCCESS:
      console.log('Signout success');
      return state;  
    case c.SIGNUP_SUCCESS:
      console.log('Signup success');
      return {
        ...state,
        authError: null
      }   
    case c.SIGNUP_ERROR:
      console.log('Signup error');
      return {
        ...state,
        authError: action.err.message
      } 
    default:
      return state; 
  }        
}

export default authReducer;