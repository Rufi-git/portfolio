import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDvEHgwv8L8GG2SJ_WHJCT9jwV-4DQtgkM",
  authDomain: "portfolio-backend-4fc5e.firebaseapp.com",
  projectId: "portfolio-backend-4fc5e",
  storageBucket: "portfolio-backend-4fc5e.appspot.com",
  messagingSenderId: "941547631206",
  appId: "1:941547631206:web:957de92c91d5d822b2b3a7",
  measurementId: "G-B2SK9XXGTK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);