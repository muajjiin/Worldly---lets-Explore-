import { auth } from "./client";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; // returns Firebase user
  } catch (err) {
    console.error("Google Sign-In error:", err);
    throw err;
  }
};

export const logout = async () => {
  await signOut(auth);
};
