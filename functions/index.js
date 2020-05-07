const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.reviewCreated = functions.firestore
  .document('reviews/{reviewId}')
  .onCreate(doc => {

    const review = doc.data();
    const notification = {
      content: 'Added a new review',
      user: `${review.authorFirstName} ${review.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
  return createNotification(notification);
});
