import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getMessaging, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcS3_TM4HqQwNBZJZAqknJ3-vE-aFklwo",
  authDomain: "transgate-606f8.firebaseapp.com",
  projectId: "transgate-606f8",
  storageBucket: "transgate-606f8.appspot.com",
  messagingSenderId: "904943854948",
  appId: "1:904943854948:web:89da3195158d8fb65b4671",
  measurementId: "G-H3N11QFDDB"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // ضع رابط أيقونة الموقع
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
