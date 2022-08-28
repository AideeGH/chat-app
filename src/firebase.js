// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8g7NHXmu89AOEWegYEgqRFZ0vCYHd01k",
  authDomain: "chat-app-9aa0d.firebaseapp.com",
  projectId: "chat-app-9aa0d",
  storageBucket: "chat-app-9aa0d.appspot.com",
  messagingSenderId: "1065236640699",
  appId: "1:1065236640699:web:aa1d87ec55bf9464faca9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
