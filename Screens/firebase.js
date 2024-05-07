// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    // apiKey: "AIzaSyAdaZ4lXurV3zGRYn8AB9PEEarwn8ht7_8",
    // authDomain: "csg1-d8421.firebaseapp.com",
    // projectId: "csg1-d8421",
    // storageBucket: "csg1-d8421.appspot.com",
    // messagingSenderId: "881558113515",
    // appId: "1:881558113515:web:4e65deb9bb527854a3c2ae",
    // measurementId: "G-GZV2HS8YKK"
    apiKey: "AIzaSyAZNSMn7GgShl8j_0jBYkJIxxmHDjFDLi4",
    authDomain: "first-project-d2377.firebaseapp.com",
    projectId: "first-project-d2377",
    storageBucket: "first-project-d2377.appspot.com",
    messagingSenderId: "643445724789",
    appId: "1:643445724789:web:7634ca7f5facad01638a3c"
} ;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};