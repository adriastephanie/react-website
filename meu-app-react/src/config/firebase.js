import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFrwmP4LhhXhQNXv1ryOoKFqIRW07enes",
    authDomain: "meu-app-react.firebaseapp.com",
    projectId: "meu-app-react",
    storageBucket: "meu-app-react.appspot.com",
    messagingSenderId: "539738803501",
    appId: "1:539738803501:web:a1dcb13fe576314ec697a4"
  };

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);