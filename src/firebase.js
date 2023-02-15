// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
*/
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDm6i23tf2Jd23oYao9_wXu8T8to42D8fE",
  authDomain: "clone-bbe98.firebaseapp.com",
  projectId: "clone-bbe98",
  storageBucket: "clone-bbe98.appspot.com",
  messagingSenderId: "133757502640",
  appId: "1:133757502640:web:1a9eaa3625cdf2614b2775",
  measurementId: "G-7JBH2K20B7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db,auth};
export default firebase