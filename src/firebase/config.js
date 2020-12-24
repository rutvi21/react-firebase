import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDaSg4ke9sbFbFvC4n2locZONTLTXdPkAM",
  authDomain: "react-animal.firebaseapp.com",
  databaseURL: "https://react-animal-default-rtdb.firebaseio.com",
  projectId: "react-animal",
  storageBucket: "react-animal.appspot.com",
  messagingSenderId: "146101051151",
  appId: "1:146101051151:web:3708ff1a74339f856c687a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };