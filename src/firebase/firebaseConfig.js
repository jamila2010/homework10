import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkpKKMFAhHmADBi62TaCfeIF71ct_Awhk",
  authDomain: "todo-cacb8.firebaseapp.com",
  projectId: "todo-cacb8",
  storageBucket: "todo-cacb8.firebasestorage.app",
  messagingSenderId: "191658889028",
  appId: "1:191658889028:web:4e1141769270495e8dd111",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();
