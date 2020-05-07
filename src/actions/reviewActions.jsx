import * as c from './ActionTypes';

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
  // console.log("reviewtoupdate", reviewToUpdate);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    // const reviewId = getState().firestore.data.reviews[id];
    // console.log("id", reviewId);

    firestore.collection('reviews').doc("reviewId").set({ 
      rating: reviewToUpdate.rating,
      content: reviewToUpdate.content,
      createAt: new Date()
    }

    ).then(() => {
      dispatch({ type: c.UPDATE_REVIEW, reviewToUpdate });
    }).catch((err) => {
      dispatch({ type: c.UPDATE_REVIEW_ERROR, err })
      })
    
  }
}    


export const deleteReview = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('reviews').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      dispatch({ type: c.DELETE_REVIEW })
    });
  }  
}