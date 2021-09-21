import firebase from 'firebase/app'
// the below imports are option - comment out what you don't need
import 'firebase/auth'
import 'firebase/firestore'
//import 'firebase/storage'
//import 'firebase/analytics'
//import 'firebase/performance'

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}


export default function initFirebase() {
  if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials)
      // Check that `window` is in scope for the analytics module!
      }
      console.log('Firebase was successfully init.')
  }





//Firebase functions to export
//const db = firebase.firestore();
//const auth = firebase.auth();


//export {
  //db,
 //auth
//}
//export default firebase;