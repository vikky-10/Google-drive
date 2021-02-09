import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID,
  apiKey: "AIzaSyAs4lF9GGKnxCm8J0W71AczSSLfpPlt3R4",
  authDomain: "drive-9dc37.firebaseapp.com",
  databaseURL: "https://drive-9dc37-default-rtdb.firebaseio.com/",
  projectId: "drive-9dc37",
  storageBucket: "drive-9dc37.appspot.com",
  messagingSenderId: "622757281496",
  appId: "1:622757281496:web:d78d34c1633a77dfa021ad",
});

export const auth = app.auth();
const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};
export default app;
