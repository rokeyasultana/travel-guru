// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhzSykxzarHJIqhBQ5JRg2hetefhaWeg8",
  authDomain: "travel-guru-e67ef.firebaseapp.com",
  projectId: "travel-guru-e67ef",
  storageBucket: "travel-guru-e67ef.appspot.com",
  messagingSenderId: "467323093160",
  appId: "1:467323093160:web:2ab0b6021530eac85e829d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;