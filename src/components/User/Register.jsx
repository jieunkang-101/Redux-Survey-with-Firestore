import React, { useState } from "react";
import FlashMessage from './FlashMessage';
import firebase from "firebase/app";
// import PropTypes from 'prop-types';

function Register() {

  const [ successMsg, setSuccessMsg ] = useState('');
  const [ errorMsg, setErrorMsg ] = useState(''); 

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        setSuccessMsg("successfully signed up!");
        console.log("successfully signed up!");
      })
      .catch(function (error) {
        setErrorMsg(error.message);
        console.log(error.message);
      });
  }
  return (
    <>
    <h1>Register</h1>
    <form onSubmit={doSignUp}>
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Sign up</button>
    </form>
    </>
  )
}

export default Register;