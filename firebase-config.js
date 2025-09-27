// firebase-config.js
// Firebase configuration from your project
const firebaseConfig = {
    apiKey: "AIzaSyBYT9Kt9EidYHF_ucp4JNvlVC2jr1iXtJg",
    authDomain: "izvini.firebaseapp.com",
    projectId: "izvini",
    storageBucket: "izvini.firebasestorage.app",
    messagingSenderId: "27109215591",
    appId: "1:27109215591:web:2c2c307716d2738bb233c2",
    measurementId: "G-LFMZLBNG5G"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const analytics = firebase.analytics();