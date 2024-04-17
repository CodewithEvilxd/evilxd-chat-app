import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "evilxd-chitchat.firebaseapp.com",
  projectId: "evilxd-chitchat",
  storageBucket: "evilxd-chitchat.appspot.com",
  messagingSenderId: "85207618554",
  appId: "1:85207618554:web:9e89269d90b56648cc8a43",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
