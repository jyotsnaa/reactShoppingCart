import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
 
      // firbase API Key
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };