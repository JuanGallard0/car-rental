// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSnbWUXJKH6zR3H5B99mR8wuNdOO5JtHY",
  authDomain: "car-rental-7084a.firebaseapp.com",
  projectId: "car-rental-7084a",
  storageBucket: "car-rental-7084a.appspot.com",
  messagingSenderId: "1045630336495",
  appId: "1:1045630336495:web:f3e0292650cc8d55e64a1a",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

module.exports = { firebase };
