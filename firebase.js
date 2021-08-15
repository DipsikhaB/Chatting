import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWbrP47wHU3D10kOR6pnag-6rgOoPjErs",
  authDomain: "realchat-f5861.firebaseapp.com",
  projectId: "realchat-f5861",
  storageBucket: "realchat-f5861.appspot.com",
  messagingSenderId: "1055474150604",
  appId: "1:1055474150604:web:10f9e8e5f27707084ae669",
  measurementId: "G-EYG40MTDL2",
};

let app;

if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
