var admin = require("firebase-admin");

const serviceAccount = require(process.env.local.NEXT_PUBLIC_FIREBASE_CONFIG);

console.log(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

try {
  admin.initializeApp({
    credential: JSON.parse(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
} catch (e) {}

export const firestore = admin.firestore();
