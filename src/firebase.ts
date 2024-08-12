// src/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Import types separately
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
    apiKey:"AIzaSyC7Z8JyxJtg30hPvpqX80OvpnXen636i5E",
    authDomain: "testing-abdulkader.firebaseapp.com",
    projectId:"testing-abdulkader",
    storageBucket: "testing-abdulkader.appspot.com",
    messagingSenderId: "194338014584",
    appId: "1:194338014584:web:3bed072496acab8caf748d",
};

// Initialize Firebase app
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth: Auth = getAuth(app);
const firestore: Firestore = getFirestore(app);

export const db = getFirestore(app);

export { auth, signInWithEmailAndPassword, firestore };
