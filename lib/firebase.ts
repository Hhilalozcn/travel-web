import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSruCDX-bU1LAyc-5vZXmCQjaXOUCjLi0",
  authDomain: "seyahat-gunlugum.firebaseapp.com",  // Update with your Auth domain
  projectId: "seyahat-gunlugum",  // Your Project ID
  storageBucket: "seyahat-gunlugum.appspot.com",  // Update with your Storage bucket
  messagingSenderId: "86174064518",  // Your Messaging Sender ID
  appId: "1:86174064518:web:YOUR_APP_ID",  // Update with your App ID
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
