import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACu4h2tmxvgtPp5DiJD_fmbPciZbmkXLg",
  authDomain: "buzzer-app-5f1c2.firebaseapp.com",
  databaseURL: "https://buzzer-app-5f1c2-default-rtdb.firebaseio.com",
  projectId: "buzzer-app-5f1c2",
  storageBucket: "buzzer-app-5f1c2.appspot.com",
  messagingSenderId: "115703988977",
  appId: "1:115703988977:web:3aac38be3421cb1cc91f50",
  measurementId: "G-ERHP9NDB5R"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()