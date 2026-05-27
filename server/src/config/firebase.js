import admin from "firebase-admin";
import fs from "fs";

let serviceAccount;

// যদি Render-এ চলে, তবে Environment Variable থেকে ডাটা নেবে
if (process.env.FIREBASE_CREDENTIALS) {
  serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);
} else {
  // যদি লোকাল পিসিতে চলে, তবে ফাইল থেকে ডাটা নেবে
  const fileData = fs.readFileSync(new URL('./serviceAccountKey.json', import.meta.url));
  serviceAccount = JSON.parse(fileData);
}

// ফায়ারবেস ইনিশিয়ালাইজ করা (যাতে ডাবল চালু না হয়)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

// ডাটাবেস (db) এক্সপোর্ট করা হচ্ছে, যাতে কন্ট্রোলার এটি ব্যবহার করতে পারে
export const db = admin.firestore();
export default admin;