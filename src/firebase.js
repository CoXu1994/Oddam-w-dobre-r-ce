import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const app = initializeApp({
    apiKey: "AIzaSyApay7eC9q_CLbgvhqDMfT4bSO7pijuWV8",
    authDomain: "portfoliolab-authproductio.firebaseapp.com",
    projectId: "portfoliolab-authproductio",
    storageBucket: "portfoliolab-authproductio.appspot.com",
    messagingSenderId: 467495477667,
    appId: "1:467495477667:web:2395dd351ab80868427a16"
})
export const auth = getAuth(app);
export default app ;