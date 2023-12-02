// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfjpiRTXKfWgHjSDujmWhebsVihS6iebE",
  authDomain: "tach-event.firebaseapp.com",
  projectId: "tach-event",
  storageBucket: "tach-event.appspot.com",
  messagingSenderId: "912299883362",
  appId: "1:912299883362:web:ac528cf8e02c8886ba4a3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;