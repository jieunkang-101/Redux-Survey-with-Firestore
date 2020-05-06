// import React from 'react';
// import { MovieRef } from '../../firebase';
// import StarRating from './StarRating';
// import './RatingPage.css';

// class RatingPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       rating: 0,
//       // user: ''
//     };
//   }

//   // async componentDidMount(){
//   //   const user = await this.props.auth.getUser();
//   //   this.setState({user:user.email});
//   // }


//   handleChange = ev => {
//     this.setState({
//       [ev.target.title]: ev.target.value
//     });
//   };

//   setRating = rating => {
//     this.setState({ rating: rating });
//   };

//   saveRating = () => {
//     MovieRef.push()
//       .set(this.state)
//       .then(() => {
//         this.props.history.push('/ratinglist');
//       });
//   };

//   render() {
//     return (
//       <div className="rating-form">
//         <div className="heading">Rate A Movie</div>
//         <div className="form-input">
//           <label htmlFor="name">Movie:</label>
//           <input
//             type="text"
//             name="title"
//             id="title"
//             onChange={this.handleChange}
//           />
//         </div>
//         <div className="form-input rating">
//           <label htmlFor="rating">Rating:</label>
//           <StarRating
//             numberOfStars="5"
//             currentRating="0"
//             onClick={this.setRating}
//           />
//         </div>
//         <div className="actions">
//           <button type="submit" onClick={this.saveRating}>
//             Submit Rating
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default RatingPage;

