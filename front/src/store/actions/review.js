import axios from "axios";

export const postReview = review => dispatch => {
    axios
      .post(`/api/reviews/${review.productId}`,  review )
      .then(res => res.data) //recibo la data del back //
      .then(review => alert("Gracias!"))
      .catch(err => {
        alert("Ya realizaste una valoracion de este producto!")
      });
  };