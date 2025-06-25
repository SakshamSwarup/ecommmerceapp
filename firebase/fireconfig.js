// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB7EdL79hRx6ND1bASiqKZ3Ib740wGKRdY',
  authDomain: 'ecommerce-7b8bc.firebaseapp.com',
  projectId: 'ecommerce-7b8bc',
  storageBucket: 'ecommerce-7b8bc.firebasestorage.app',
  messagingSenderId: '850063276078',
  appId: '1:850063276078:web:7555bbe366356ca9bf47bf',
  measurementId: 'G-LSBY2K08KN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
