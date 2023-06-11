// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDserUVbo70trmBT7MUpl5qEb1dX_4sVDI",
    authDomain: "authproject-b611d.firebaseapp.com",
    projectId: "authproject-b611d",
    storageBucket: "authproject-b611d.appspot.com",
    messagingSenderId: "1001425474394",
    appId: "1:1001425474394:web:2e25f425fe77db6f911963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const auth = getAuth(app)