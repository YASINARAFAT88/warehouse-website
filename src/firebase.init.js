// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIn_2s_Y1sFmI1KX-h6LqZufYE2ndodnI",
  authDomain: "warehouse-managment-syst-b0f3e.firebaseapp.com",
  projectId: "warehouse-managment-syst-b0f3e",
  storageBucket: "warehouse-managment-syst-b0f3e.appspot.com",
  messagingSenderId: "490694099551",
  appId: "1:490694099551:web:b71263c0ee34a4718ed1ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;