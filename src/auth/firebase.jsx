// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZ3ViYaTgCzkUK2FS47AoWpkbRih70QGo',
  authDomain: 'rick-and-morty-9456a.firebaseapp.com',
  projectId: 'rick-and-morty-9456a',
  storageBucket: 'rick-and-morty-9456a.appspot.com',
  messagingSenderId: '690090878911',
  appId: '1:690090878911:web:b0d24309e890ff017e230a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
