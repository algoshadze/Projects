import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard'
import AddReview from '../ReviewCard/AddReview'

const reviews = require('../../reducer/review-data').reviews

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  createReviewsItems() {
    return reviews.map((review) => {
      return (
        <div style={{border: '1px solid blue', marginTop:25, minHeight: 250, padding: 30}}>
          <img
            className="image-review"
            src={review.image}
          />
          <div>
            <p className="Card-text">
              <h2>{review.name},{review.age}</h2>
              {review.text}
            </p>
          </div>
        </div>
      )
    })
  }
  render() {
    const useStyles =
    {
      marginTop: 40,
      fontSize: 20,
      maxWidth: 1000,
      alignitems: 'center',
      justifyContent: 'center',
      margin: 'auto',

    }
    const classes = useStyles;
    return (
      <div style={classes}>
        {this.createReviewsItems()}
        <AddReview/>

      </div>
    );
  }
}

export default Reviews;
