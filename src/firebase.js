import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage';
import {cityDb} from './temp/m-city-export'
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
  const db = firebase.firestore();
  const matchesCollection = db.collection('matches');
  const playersCollection = db.collection('players');
  const positionsCollection = db.collection('positions');
  const promotionsCollection = db.collection('promotions');
  const teamsCollection = db.collection('teams');


  // cityDb.matches.forEach(item => {
  //   matchesCollection.add(item)
  // });

  // cityDb.players.forEach(item => {
  //   playersCollection.add(item)
  // });

  // cityDb.positions.forEach(item => {
  //   positionsCollection.add(item)
  // });
  // cityDb.promotions.forEach(item => {
  // promotionsCollection.add(item)
  // });
  // cityDb.teams.forEach(item => {
  //   teamsCollection.add(item)
  // });
  
  export {
    firebase,
    matchesCollection,
    playersCollection,
    positionsCollection,
    promotionsCollection,
    teamsCollection
  }
