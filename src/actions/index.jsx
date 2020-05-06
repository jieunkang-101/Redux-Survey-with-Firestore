import * as c from './ActionTypes';

export const createReview = (review) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('reviews').add({
      ...review, 
      authorFirstName: 'Net',
      authorLastName: 'Com',
      authorId: 12345,
      createAt: new Date()
    }).then(() => {
      dispatch({ type: c.CREATE_REVIEW, review });
    }).catch((err) => {
      dispatch({ type: c.CREATE_REVIEW_ERROR, err });
    })
  }
};

export const updateReview = (review) => {
  
  console.log("action", review);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    // firestore.collection('reveiws').doc('review.id').update({ 
    //   ...review,
    //   authorFirstName: 'Update',
    //   authorLastName: 'Test',
    //   authorId: 12345,
    //   createAt: new Date()
    // }
    firestore.update({collection: 'reviews', doc: review.id }, ...review

    ).then(() => {
      dispatch({ type: c.UPDATE_REVIEW, review });
    }).catch((err) => {
      dispatch({ type: c.UPDATE_REVIEW_ERROR, err });
    })
  }
}    