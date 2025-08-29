import { credential } from 'firebase-admin';
import { initializeApp as initializeAdminApp, getApps, getApp } from 'firebase-admin/app';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';
import { Buffer } from 'buffer';

const adminApp = !getApps().length
    ? initializeAdminApp({
        credential: credential.cert(JSON.parse(Buffer.from(process.env.FIREBASE_ADMIN_CREDENTIALS, 'base64').toString())),
    })
    : getApp();

const adminDb = getAdminFirestore(adminApp);

export { adminDb };