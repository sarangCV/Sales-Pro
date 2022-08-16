import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9iOx6rIjmGoFeAkarWeGeMJLMNxAm4uo",
  authDomain: "yaduka-group.firebaseapp.com",
  projectId: "yaduka-group",
  storageBucket: "yaduka-group.appspot.com",
  messagingSenderId: "846895583588",
  appId: "1:846895583588:web:927bed95808a151a006a71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
