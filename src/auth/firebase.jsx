import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: ${{ env.REACT_APP_FIREBASE_API_KEY }},
  authDomain: ${{ env.REACT_APP_FIREBASE_AUTH_DOMAIN }},
  projectId: ${{ env.REACT_APP_FIREBASE_PROJECT_ID }},
  storageBucket: ${{ env.REACT_APP_FIREBASE_STORAGE_BUCKET }},
  messagingSenderId: ${{ env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID }},
  appId: ${{ env.REACT_APP_FIREBASE_APP_ID }},
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
