// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getRemoteConfig } from "firebase/remote-config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmVYqaUCVFl6kSjuIupn0jWzlYjhJbfgU",
  authDomain: "games-store-3630f.firebaseapp.com",
  projectId: "games-store-3630f",
  storageBucket: "games-store-3630f.appspot.com",
  messagingSenderId: "101685084992",
  appId: "1:101685084992:web:c3114abdc6f83a7e6630a5",
  measurementId: "G-6BWW5Q6SN2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const init = () => {
  initializeApp(firebaseConfig);
};