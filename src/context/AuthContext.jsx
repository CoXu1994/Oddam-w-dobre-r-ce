import React, { useContext, useState, useEffect, createContext } from "react"
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext()

function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth,user => {
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])
    
    const user = {
        currentUser,
        createUser,
    }
    

    return(
        <AuthContext.Provider value = {value}>
            { children }
        </AuthContext.Provider>
    )
}
