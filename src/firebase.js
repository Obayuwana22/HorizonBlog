import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9fPeynljfzHTLQmsMWvI1j9qcobv4CUc",
  authDomain: "horizonblog-ae97c.firebaseapp.com",
  projectId: "horizonblog-ae97c",
  storageBucket: "horizonblog-ae97c.appspot.com",
  messagingSenderId: "573352453036",
  appId: "1:573352453036:web:443b94bafed5df39645009",
};

// initial firebase app
const app = initializeApp(firebaseConfig);

// init service
export const db = getFirestore(app);

// authentication
export const auth = getAuth(app);
