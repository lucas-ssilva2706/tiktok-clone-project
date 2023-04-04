import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAyHX2ARIb8560FyWYHn7vhu3ikdUWprsA",
  authDomain: "tiktok-clone-6ca6b.firebaseapp.com",
  projectId: "tiktok-clone-6ca6b",
  storageBucket: "tiktok-clone-6ca6b.appspot.com",
  messagingSenderId: "477549315577",
  appId: "1:477549315577:web:bb509d2318c99cd7042928"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;