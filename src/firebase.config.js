// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApFM73quhdzY6shvwXM8tbcatmsxRZu8Q",
  authDomain: "web-app-60946.firebaseapp.com",
  databaseURL: "https://web-app-60946-default-rtdb.firebaseio.com",
  projectId: "web-app-60946",
  storageBucket: "web-app-60946.appspot.com",
  messagingSenderId: "398785964713",
  appId: "1:398785964713:web:b6c4dd360c10d366d657b8",
  measurementId: "G-QS7X5YLDL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default app;