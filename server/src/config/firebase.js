const admin = require("firebase-admin");

let serviceAccount;

// যদি প্রজেক্টটি Render-এ চলে, তবে Environment Variable থেকে ডাটা নেবে
if (process.env.FIREBASE_CREDENTIALS) {
  serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);
} else {
  // আর যদি লোকাল পিসিতে চলে, তবে ফাইল থেকে ডাটা নেবে
  serviceAccount = require("./serviceAccountKey.json");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;