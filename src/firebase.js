import firebase from 'firebase/app'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyApce1Oqw2vRE4Atw-YuWy-QqJA7_SzuVs",
    authDomain: "mcity-project2.firebaseapp.com",
    projectId: "mcity-project2",
    storageBucket: "mcity-project2.appspot.com",
    messagingSenderId: "278516553124",
    appId: "1:278516553124:web:ddb147442aa115e2b55d31",
    measurementId: "G-XEFGJFNL29"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export {
    firebase
  }