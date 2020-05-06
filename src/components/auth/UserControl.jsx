// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import SignIn from './Signin';
// import Register from './Register';
// import SignOut from './SignOut';
// import { withFirestore, isLoaded } from 'react-redux-firebase';

// function UserControl(props) {
//   if (isLoaded(auth) && auth.currentUser == null) {
//     return (
//       <>
//         <SignIn />
//         <Register />
//       </>
//     );
//   } else if (isLoaded(auth) && auth.currentUser != null) {
//     return <SignOut />;
//   }
// }

// export default withFirestore(UserControl);