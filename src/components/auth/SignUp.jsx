// import React, { useState } from "react";
// import FlashMessage from './FlashMessage';
// import firebase from "firebase/app";
// // import PropTypes from 'prop-types';

// function Register() {

//   const [ successMsg, setSuccessMsg ] = useState('');
//   const [ errorMsg, setErrorMsg ] = useState(''); 

//   function doSignUp(event) {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(function () {
//         setSuccessMsg("successfully signed up!");
//         console.log("successfully signed up!");
//       })
//       .catch(function (error) {
//         setErrorMsg(error.message);
//         console.log(error.message);
//       });
//   }
//   return (
//     <>
//     <h1>Register</h1>
//     <form onSubmit={doSignUp}>
//       <input type="text" name="email" placeholder="email" />
//       <input type="password" name="password" placeholder="Password" />
//       <button type="submit">Sign up</button>
//     </form>
//     </>
//   )
// }

// export default Register;

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

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
