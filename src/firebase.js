import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCoUjdVZhzOj1wiE1B4YoVl3UCiTgSBvO0",
    authDomain: "battleofcurses.firebaseapp.com",
    projectId: "battleofcurses",
    storageBucket: "battleofcurses.appspot.com",
    messagingSenderId: "359481533008",
    appId: "1:359481533008:web:1293cf6c52c16606496755",
    measurementId: "G-4JRSY2CB3L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;