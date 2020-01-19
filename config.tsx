import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    // apiKey: "<YOUR-API-KEY>",
    // authDomain: "<YOUR-AUTH-DOMAIN>",
    databaseURL: "https://chordu-77eeb.firebaseio.com/",
    // storageBucket: "<YOUR-STORAGE-BUCKET>"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.database()

  export default db;