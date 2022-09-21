// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYebhC-NCJ-QHr5CjsI-Lx9j88Muke4Vw',
  authDomain: 'mehssage.firebaseapp.com',
  projectId: 'mehssage',
  storageBucket: 'mehssage.appspot.com',
  messagingSenderId: '102068092653',
  appId: '1:102068092653:web:08d761d425e27a1ae256e4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
