importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);
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

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    title: payload.notification.title,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
