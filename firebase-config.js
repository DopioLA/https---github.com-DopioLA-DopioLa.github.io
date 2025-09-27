// firebase-config.js - ЗАМЕНИТЕ НА ВАШИ ДАННЫЕ!
const firebaseConfig = {
    apiKey: "ваш-api-key-из-firebase",
    authDomain: "izvini-ваш-id.firebaseapp.com",
    projectId: "izvini-ваш-id",
    storageBucket: "izvini-ваш-id.appspot.com",
    messagingSenderId: "ваш-sender-id",
    appId: "ваш-app-id"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();