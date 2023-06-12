const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { initializeApp } = require("firebase/app");
const serviceAccount = require("../../../../car-rental-7084a-firebase-adminsdk-yu1w0-dfb8acd7db.json");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSnbWUXJKH6zR3H5B99mR8wuNdOO5JtHY",
  authDomain: "car-rental-7084a.firebaseapp.com",
  projectId: "car-rental-7084a",
  storageBucket: "car-rental-7084a.appspot.com",
  messagingSenderId: "1045630336495",
  appId: "1:1045630336495:web:f3e0292650cc8d55e64a1a",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
initializeApp(firebaseConfig);

module.exports = functions;
