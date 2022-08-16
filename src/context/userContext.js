import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // registering a user
  const registerUser = (email, name, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  // Signing in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        return res;
      })
      .catch((err) => setError(err.code))

      .finally(() => setLoading(false));
  };

  // logging out user
  const logoutUser = () => {
    signOut(auth);
  };

  const testText = "this is a test text from context";

  const contextValue = {
    user,
    loading,
    error,
    registerUser,
    signInUser,
    logoutUser,
    testText,
  };
  // console.log('useffect from context', user);

  return (
    <UserContext.Provider value={contextValue}>
      {!loading && children}
    </UserContext.Provider>
  );
};
