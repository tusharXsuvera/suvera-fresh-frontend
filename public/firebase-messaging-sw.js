importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

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
