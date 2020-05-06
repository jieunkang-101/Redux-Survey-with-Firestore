// import React, { useState } from "react";
// import firebase from "firebase/app";

// function SignIn(){  

//   const [ successMsg, setSuccessMsg ] = useState('');
//   const [ errorMsg, setErrorMsg ] = useState(''); 

//   function doSignIn(event) {
//     event.preventDefault();
//     const email = event.target.signinEmail.value;
//     const password = event.target.signinPassword.value;
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(function () {
//         setSuccessMsg({ successMsg: "successfully signed in!" });
//         console.log("Successfully signed in!");
//       })
//       .catch(function (error) {
//         setErrorMsg(error.message);
//         console.log({ errorMsg: error.message });
//       });
//   }

//   return (
//     <React.Fragment>
//       <h1>Sign In</h1>
//       <form onSubmit={doSignIn}>
//         <input type="text" name="signinEmail" placeholder="email" />
//         <input type="password" name="signinPassword" placeholder="Password" />
//         <button type="submit">Sign in</button>
//       </form>
//     </React.Fragment>
//   );
// }

// export default SignIn;

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
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
