import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase/client";
import { signInWithGoogle } from "../../../firebase/firebaseauthWrapper";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignInPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Redirect logged-in users to dashboard/travel page
        navigate("/travel");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const loggedInUser = await signInWithGoogle();
      console.log("Logged in user:", loggedInUser);
      navigate("/travel"); // redirect after login
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!user && (
        <>
          <h2>Sign in with Google</h2>
          <button onClick={handleLogin}>Sign in with Google</button>
        </>
      )}
    </div>
  );
};

export default SignInPage;
