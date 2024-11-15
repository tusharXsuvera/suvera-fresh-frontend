import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

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
