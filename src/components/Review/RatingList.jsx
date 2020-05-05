import React from 'react';
import { MovieRef } from '../../firebase';
import './RatingList.css';

class RatingListPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ratings: [],
      // user:''
    };
  }

  async componentDidMount(){
    // const user = await this.props.auth.getUser();
    MovieRef.on('value', snap => {
      const response = snap.val();
      const ratings = [];
      for(let rating in response){
        ratings.push({id: rating, ...response[rating]});
      }
      this.setState({
        ratings: ratings
      });
    });
  }

  render(){
    return (
      <table className="ratings-list">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
        {this.state.ratings.map((rating) => {
          return (
            <tr className="rating" key={rating.id}>
              <td>{rating.name}</td>
              <td className="rating-value">{rating.rating}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}

export default RatingListPage;