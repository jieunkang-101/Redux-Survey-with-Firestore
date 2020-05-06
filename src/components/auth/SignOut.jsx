// import React, { useState } from "react";
// import firebase from "firebase/app";

// function SignOut(){  

//   const [ successMsg, setSuccessMsg ] = useState('');
//   const [ errorMsg, setErrorMsg ] = useState(''); 


//   function doSignOut() {
//     firebase
//       .auth()
//       .signOut()
//       .then(function () {
//         setSuccessMsg({ successMsg: "Successfully signed out!" }) ;
//         console.log("Successfully signed out!");
//       })
//       .catch(function (error) {
//         setErrorMsg({ errorMsg: error.message });
//         console.log(error.message);
//       });
//   }

//   return (
//     <React.Fragment>
//       <h1>Sign Out</h1>
//       <button onClick={doSignOut}>Sign out</button>
//     </React.Fragment>
//   );
// }

// export default SignOut;

import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="bit pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
