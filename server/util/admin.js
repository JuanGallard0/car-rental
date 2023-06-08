var admin = require("firebase-admin");

var serviceAccount = require("../../car-rental-7084a-firebase-adminsdk-yu1w0-dfb8acd7db.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };
