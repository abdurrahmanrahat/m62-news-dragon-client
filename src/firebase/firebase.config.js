// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0fsKe74JzFL7jASSus9MlDPiOBDY3W3c",
  authDomain: "m62-news-dragon-client.firebaseapp.com",
  projectId: "m62-news-dragon-client",
  storageBucket: "m62-news-dragon-client.appspot.com",
  messagingSenderId: "335980983694",
  appId: "1:335980983694:web:236f589ce00fdf1896e0df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;