import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase/client";
import { signInWithGoogle, logout } from "../../../firebase/firebaseauthWrapper";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const SignInPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const loggedInUser = await signInWithGoogle();
      console.log("Logged in user:", loggedInUser);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <>
          <h2>Welcome, {user.displayName}</h2>
          <img
            src={user.photoURL || ""}
            alt="avatar"
            width={100}
            style={{ borderRadius: "50%" }}
          />
          <br />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Sign in with Google</h2>
          <button onClick={handleLogin}>Sign in with Google</button>
        </>
      )}
    </div>
  );
};

export default SignInPage;
