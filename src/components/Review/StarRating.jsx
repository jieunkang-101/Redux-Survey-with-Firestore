// import React from 'react';
// import './StarRating.css';

// class StarRating extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentRating: this.props.currentRating
//     };
//   }

//   componentDidMount() {
//     this.setRating();
//   }

//   hoverHandler = event => {
//     const stars = event.target.parentElement.getElementsByClassName('star');
//     const hoverValue = event.target.dataset.value;
//     Array.from(stars).forEach(star => {
//       star.style.color = 
//         hoverValue >= star.dataset.value ? 'yellow' : 'gray';
//     });
//   };

//   setRating = event => {
//     const stars = this.refs.rating.getElementsByClassName('star');
//     Array.from(stars).forEach(star => {
//       star.style.color =
//         this.state.currentRating >= star.dataset.value ? 'yellow' : 'gray';
//     });
//   };

//   starClickHandler = event => {
//     let rating = event.target.dataset.value;
//     this.setState({ currentRating: rating }); // set state so the rating stays highlighted
//     if(this.props.onClick){
//       this.props.onClick(rating); // emit the event up to the parent
//     }
//   };

//   render() {
//     return (
//       <div
//         className="rating"
//         ref="rating"
//         data-rating={this.state.currentRating}
//         onMouseOut={this.setRating}
//       >
//         {[...Array(this.props.numberOfStars).keys()].map(n => {
//           return (
//             <span
//               className="star"
//               key={n+1}
//               data-value={n+1}
//               onMouseOver={this.hoverHandler}
//               onClick={this.starClickHandler}
//             >
//               &#9733; 
//             </span>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default StarRating;


