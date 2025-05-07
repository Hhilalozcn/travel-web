import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBSruCDX-bU1LAyc-5vZXmCQjaXOUCjLi0",
    authDomain: "seyahat-gunlugum.firebaseapp.com",
    databaseURL: "https://seyahat-gunlugum-default-rtdb.firebaseio.com",
    projectId: "seyahat-gunlugum",
    storageBucket: "seyahat-gunlugum.firebasestorage.app",
    messagingSenderId: "86174064518",
    appId: "1:86174064518:web:05c8185646ae9bb5b85607",
    measurementId: "G-J9LXQT7FG3"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
