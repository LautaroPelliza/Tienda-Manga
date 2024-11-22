import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBTNNbPRDALxxFiOrUR7wXUq20EoKkFrPE",
    authDomain: "shonen-manga-store.firebaseapp.com",
    projectId: "shonen-manga-store",
    storageBucket: "shonen-manga-store.firebasestorage.app",
    messagingSenderId: "761566068378",
    appId: "1:761566068378:web:a9382def93f1f22d31a923"
};


initializeApp(firebaseConfig);

const db = getFirestore();

export default db