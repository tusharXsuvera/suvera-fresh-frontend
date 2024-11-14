import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDLqY53_Mhua0v86ese5Lv_TS1hzMuTBPg",
  authDomain: "suverafresh-362e4.firebaseapp.com",
  projectId: "suverafresh-362e4",
  storageBucket: "suverafresh-362e4.firebasestorage.app",
  messagingSenderId: "247687775540",
  appId: "1:247687775540:web:44aea8bba25170fd735161",
};
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
