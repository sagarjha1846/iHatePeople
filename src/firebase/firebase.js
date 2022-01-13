import firebase from "firebase";
import "@firebase/storage";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe6iexmS90EgjxUUQsApuF1n6HKhyzG7c",
  authDomain: "project-firebase-17f7f.firebaseapp.com",
  projectId: "project-firebase-17f7f",
  storageBucket: "project-firebase-17f7f.appspot.com",
  messagingSenderId: "14052219328",
  appId: "1:14052219328:web:2dc3667889a1b5c0c79025",
  measurementId: "G-LY44MCTHNV",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
