// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNd-VvKIjOZ4HdBrHJn5xdaE8AUoJzCdM",
  authDomain: "regal-stack-396714.firebaseapp.com",
  projectId: "regal-stack-396714",
  storageBucket: "regal-stack-396714.appspot.com",
  messagingSenderId: "829970925801",
  appId: "1:829970925801:web:da9bcf53d2127f9a3c0878",
  measurementId: "G-BSERJKKX3W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
