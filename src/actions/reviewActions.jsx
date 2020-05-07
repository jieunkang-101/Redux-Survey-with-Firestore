import * as c from './ActionTypes'

export const createReview = (review) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('reviews').add({
      ...review, 
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createAt: new Date()
    }).then(() => {
      dispatch({ type: c.CREATE_REVIEW, review });
    }).catch((err) => {
      dispatch({ type: c.CREATE_REVIEW_ERROR, err });
    })
  }
};

export const updateReview = (reviewToUpdate) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const review = getState().firestore.data.reviews;
    // console.log("test review", review);
    const reviewId = Object.keys(review)[0];
    // console.log("id", reviewId);
    firestore.collection('reviews').doc(reviewId).update({ 
      rating: reviewToUpdate.rating,
      content: reviewToUpdate.content,
      createAt: new Date()
    }).then(() => {
      console.log("Document successfully updated!");
      dispatch({ type: c.UPDATE_REVIEW, reviewToUpdate });
    }).catch((err) => {
      dispatch({ type: c.UPDATE_REVIEW_ERROR, err })
    });
  }
}    

export const deleteReview = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('reviews').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      dispatch({ type: c.DELETE_REVIEW })
    }).catch((err) => {
      dispatch({ type: c.DELETE_REVIEW_ERROR, err})
    })
  }  
}

export const selectReview = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const docRef = firestore.collection('reviews').doc(id)

    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }  
      dispatch({ type: c.SELECT_REVIEW })
    });
  }  
}
