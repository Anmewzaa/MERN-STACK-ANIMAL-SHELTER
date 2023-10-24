import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHvNgWHF3LZU8WjRfO1uO7s0raJawXlus",
  authDomain: "adoptme-3cd2f.firebaseapp.com",
  projectId: "adoptme-3cd2f",
  storageBucket: "adoptme-3cd2f.appspot.com",
  messagingSenderId: "939706785398",
  appId: "1:939706785398:web:5c18fb8fcc410b0bec0957",
  measurementId: "G-RHTVM204M5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
