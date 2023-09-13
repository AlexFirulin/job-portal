// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNFLOGVC2H-zypd7SMLb6396wvIVAj5eU",
  authDomain: "job-portal-10cd9.firebaseapp.com",
  projectId: "job-portal-10cd9",
  storageBucket: "job-portal-10cd9.appspot.com",
  messagingSenderId: "81162255609",
  appId: "1:81162255609:web:b3a79bb71a5aa7f960b628",
  measurementId: "G-G9K6PVB58E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
app.use(analytics)