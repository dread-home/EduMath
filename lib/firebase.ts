import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBfN0ci74w2zpeFcglQMSSvgKZ-zq2VK0w",
  authDomain: "edumathghana-817d5.firebaseapp.com",
  projectId: "edumathghana-817d5",
  storageBucket: "edumathghana-817d5.firebasestorage.app",
  messagingSenderId: "602430791823",
  appId: "1:602430791823:web:b2b2122fd43ec646b2d0fa",
  measurementId: "G-2TJ8FNDQS6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;