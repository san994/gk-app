import firebase from "firebase"

require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyDdiiCH8FM6PETYAyPchmFkMUqF4w4o8xU",
    authDomain: "generalknowledge-dbb92.firebaseapp.com",
    databaseURL: "https://generalknowledge-dbb92-default-rtdb.firebaseio.com",
    projectId: "generalknowledge-dbb92",
    storageBucket: "generalknowledge-dbb92.appspot.com",
    messagingSenderId: "933243427785",
    appId: "1:933243427785:web:a0460f811bf222ae5be618"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  

  export default firebase.firestore()