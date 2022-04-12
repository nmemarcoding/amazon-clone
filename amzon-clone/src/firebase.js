import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDqGxlrUWr0fcuqHocyiwe7oiJM3LTmAr8",
    authDomain: "clone-96b5a.firebaseapp.com",
    projectId: "clone-96b5a",
    storageBucket: "clone-96b5a.appspot.com",
    messagingSenderId: "669119343510",
    appId: "1:669119343510:web:642cdcfdbceaf0817d0bb7"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };