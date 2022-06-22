import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpgZtvvNClC5lq2SmflL8F7ghn69DA7Pw",
  authDomain: "proyectoreact-9beb9.firebaseapp.com",
  projectId: "proyectoreact-9beb9",
  storageBucket: "proyectoreact-9beb9.appspot.com",
  messagingSenderId: "570303729421",
  appId: "1:570303729421:web:7aa39025e1e52cafa92a44"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 