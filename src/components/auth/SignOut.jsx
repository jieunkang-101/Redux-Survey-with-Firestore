import React, { useState } from "react";
import firebase from "firebase/app";

function SignOut(){  

  const [ successMsg, setSuccessMsg ] = useState('');
  const [ errorMsg, setErrorMsg ] = useState(''); 


  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setSuccessMsg({ successMsg: "Successfully signed out!" }) ;
        console.log("Successfully signed out!");
      })
      .catch(function (error) {
        setErrorMsg({ errorMsg: error.message });
        console.log(error.message);
      });
  }

  return (
    <React.Fragment>
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  );
}

export default SignOut;
