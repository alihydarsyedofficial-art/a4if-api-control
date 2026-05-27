import admin from 'firebase-admin';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// serviceAccountKey.json ফাইলটি server/src/config/ ফোল্ডারে রাখুন
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();
export const auth = admin.auth();