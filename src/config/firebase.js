import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBegV3_4pldjJkptdPN8UTlc6uvYwYWc7Q",
    authDomain: "pickpallet.firebaseapp.com",
    databaseURL: "https://pickpallet.firebaseio.com",
    projectId: "pickpallet",
    storageBucket: "pickpallet.appspot.com",
    messagingSenderId: "89025804688",
    appId: "1:89025804688:web:6fcc9a8fa6181308ad9b15",
    measurementId: "G-K63Q5QHR2X"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig)