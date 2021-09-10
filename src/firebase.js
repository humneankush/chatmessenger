import firebase from "firebase/app";
import "firebase/auth"


export const auth  = firebase.initializeApp( {
    apiKey: "AIzaSyDy6W5r3Oycj4k6nJGdV0bQEo57zwWP66E",
    authDomain: "chat-2e19e.firebaseapp.com",
    projectId: "chat-2e19e",
    storageBucket: "chat-2e19e.appspot.com",
    messagingSenderId: "753351407987",
    appId: "1:753351407987:web:5013f8decb05e3fe016d06"
  }).auth();