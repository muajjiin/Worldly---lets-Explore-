// client.ts
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 1. Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


// 2. Initialize Firebase app
const app = initializeApp(firebaseConfig);

// 3. Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// 4. Export services
export { auth, db };
