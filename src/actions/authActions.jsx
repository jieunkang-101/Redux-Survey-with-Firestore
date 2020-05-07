import * as c from './ActionTypes'

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

export const signOut = () => {
  return (dispatch, getSate, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: c.SIGNOUT_SUCCESS })
    });
  }  
}

export const signUp = (newUser) => {
  return (dispatch, getSate, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((response) => {
      return firestore.collection('users').doc(response.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(() => {
      dispatch({ type: c.SIGNUP_SUCCESS })
    }).catch((err) => {
      dispatch({ type: c.SIGNUP_ERROR, err })
    });
  }  
}