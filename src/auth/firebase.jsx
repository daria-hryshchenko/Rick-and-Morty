import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // apiKey: p,
  // authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
