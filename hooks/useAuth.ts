'use client';

import { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

interface UserData {
  uid: string;
  role: 'student' | 'teacher';
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string;
  email: string;
  createdAt: string;
  lastLogin: string;
  avatar?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data() as UserData);
          // Update last login time
          await setDoc(doc(db, 'users', user.uid), {
            ...userDoc.data(),
            lastLogin: new Date().toISOString()
          }, { merge: true });
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        throw new Error('User data not found');
      }
      
      const userData = userDoc.data() as UserData;
      
      // Update last login
      await setDoc(doc(db, 'users', user.uid), {
        ...userData,
        lastLogin: new Date().toISOString()
      }, { merge: true });
      
      setUserData(userData);
      
      return { user, userData };
    } catch (error) {
      throw error;
    }
  };

  const signup = async (
    email: string, 
    password: string, 
    firstName: string, 
    lastName: string, 
    phone: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      const userData: UserData = {
        uid: userCredential.user.uid,
        role: 'student',
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        phone,
        email,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };

      await setDoc(doc(db, 'users', userCredential.user.uid), userData);
      setUserData(userData);
      
      return { user: userCredential.user, userData };
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setUserData(null);
    } catch (error) {
      throw error;
    }
  };

  return {
    user,
    userData,
    loading,
    login,
    signup,
    logout
  };
};