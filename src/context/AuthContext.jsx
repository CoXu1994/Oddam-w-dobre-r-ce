import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 

} from "firebase/auth";

const AuthContext = React.createContext()

function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}
function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email,password)
}
function logOut() {
    return auth.signOut();
}
export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(false)
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])
    
    const user = {
        currentUser,
        createUser,
        signIn,
        logOut,
    }
    

    return(
        <AuthContext.Provider value = {user}>
            {!loading && children }
        </AuthContext.Provider>
    )
}
