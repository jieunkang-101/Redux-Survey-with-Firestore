import * as c from './ActionTypes';

export const signIn = (credentials) => {
  return (dispatch, getSate, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: c.LOGIN_SUCCESS })
    }).catch((err) => {
      dispatch({ type: c.LOGIN_ERROR, err })
    });
  }
}