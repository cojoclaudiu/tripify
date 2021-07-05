import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBAWmBEv1d3rOQ3YQLjuM9y5jULOM0lEvU',
  authDomain: 'tripify-auth.firebaseapp.com',
  projectId: 'tripify-auth',
  storageBucket: 'tripify-auth.appspot.com',
  messagingSenderId: '694804740510',
  appId: '1:694804740510:web:9a9fef2c5713b224adbe8f',
  measurementId: 'G-NNRQZYDHTP'
});

const db = firebaseApp.firestore();

export { db };
