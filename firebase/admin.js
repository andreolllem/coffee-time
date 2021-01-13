var admin = require("firebase-admin");

console.log(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

try {
  admin.initializeApp({
    credential: JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
} catch (e) {}

export const firestore = admin.firestore();
