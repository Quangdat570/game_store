// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getRemoteConfig } from "firebase/remote-config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvfrFaGPnM8HTwnbj11TH-9poblkVKfZo",
  authDomain: "next-game-46ddb.firebaseapp.com",
  projectId: "next-game-46ddb",
  storageBucket: "next-game-46ddb.appspot.com",
  messagingSenderId: "1004653311475",
  appId: "1:1004653311475:web:f8c1fa0e6a0ccb3282ce86",
  measurementId: "G-7DN04FKE61",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const init = () => {
  initializeApp(firebaseConfig);
};