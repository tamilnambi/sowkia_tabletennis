// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCvHAyIGad5bqzfITJpW-KjUzvoIXjAkg",
  authDomain: "sowkia-tabletennis.firebaseapp.com",
  projectId: "sowkia-tabletennis",
  storageBucket: "sowkia-tabletennis.appspot.com",
  messagingSenderId: "511307104057",
  appId: "1:511307104057:web:23251db73a7f4641e132e8",
  measurementId: "G-7X1549LN90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);