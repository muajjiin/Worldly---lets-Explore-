// auth.ts
import { auth, db } from "./client";
import { 
  createUserWithEmailAndPassword as firebaseCreateUser, 
  signInWithEmailAndPassword as firebaseSignIn, 
  signOut as firebaseSignOut, 
  User 
} from "firebase/firebaseauthWrapper";
import { doc, setDoc, getDoc } from "firebase/firestore";

// 1. Sign up a new user
export async function signUpUser(email: string, password: string, extraData?: object) {
  const userCredential = await firebaseCreateUser(auth, email, password);
  const user = userCredential.user;

  // Optional: store extra data in Firestore
  if (extraData) {
    await setDoc(doc(db, "users", user.uid), extraData);
  }

  return user;
}

// 2. Login existing user
export async function loginUser(email: string, password: string) {
  const userCredential = await firebaseSignIn(auth, email, password);
  return userCredential.user;
}

// 3. Logout user
export async function logoutUser() {
  await firebaseSignOut(auth);
}

// 4. Get current logged-in user
export function getExistingUser(): User | null {
  return
