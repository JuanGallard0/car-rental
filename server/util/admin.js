const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

var serviceAccount = require("../../../car-rental-7084a-firebase-adminsdk-yu1w0-dfb8acd7db.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

module.exports = { db };
