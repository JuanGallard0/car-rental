const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebaseConfig = require("./firebase.config");
const { initializeApp } = require("firebase/app");
const serviceAccount = require("../../../../car-rental-7084a-firebase-adminsdk-yu1w0-dfb8acd7db.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
initializeApp(firebaseConfig);

module.exports = functions;
