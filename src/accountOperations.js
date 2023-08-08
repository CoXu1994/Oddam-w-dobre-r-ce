import { getAuth, signOut} from "firebase/auth";

export async function createUser(auth, email, password) {
    return await createUserWithEmailAndPassword(auth, email, password)
   
}
export async function logIn(auth, email, password) {
    return await signInWithEmailAndPassword(auth, email, password)  
}
 export async function logOut() {
    const auth = getAuth();
    return signOut(auth);
};

