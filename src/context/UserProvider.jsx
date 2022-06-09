import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const { email, photoURL, displayName, uid } = user;
              setUser({ email, photoURL, displayName, uid });
              console.log(user);
            } else {
              setUser(null);
            }
        });

        return () => unsuscribe();
    }, []);

    const signupUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    
    const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
    
    const signoutUser = () => signOut(auth)

    return (
        <UserContext.Provider value={{ user, setUser, signupUser, loginUser, signoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;