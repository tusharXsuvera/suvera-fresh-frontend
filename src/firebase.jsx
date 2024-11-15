import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { firebaseConfig } from "./utils/somefunc";

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
