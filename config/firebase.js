import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import Constants from 'expo-constants';
import database from '@react-native-firebase/database';
//import firebase from 'firebase';

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBQc612ZNY9iVs6Z441EwnYqOM01B3cAZo",
  authDomain: "proyecto-9c755.firebaseapp.com",
  projectId: "proyecto-9c755",
  storageBucket: "proyecto-9c755.appspot.com",
  messagingSenderId: "85046926372",
  appId: "1:85046926372:web:547206d68a465e941cccb1"
};

// initialize firebase
export const app =  initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();


export { auth };
