import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD0iFy3SwZ-_2D1b5WMCdMRdZdXnAhmZg8",
    authDomain: "fir-lab4-11f33.firebaseapp.com",
    databaseURL: "https://fir-lab4-11f33-default-rtdb.firebaseio.com",
    projectId: "fir-lab4-11f33",
    storageBucket: "fir-lab4-11f33.appspot.com",
    messagingSenderId: "263448853734",
    appId: "1:263448853734:web:1dc7a5ee0dec5bc2348f27",
    measurementId: "G-E1C0JSFLZ7"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, analytics };