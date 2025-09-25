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
    icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgP_8BswWAYZmLhFcHAJfqpapbXpu08BpPWUePtan_N8EKwNzKvXu4HDNXPhf4X-aoGPPeaH4h20ZuFzE6cI2EpG5nujcR22F04fpHUEYH3UENxrFpIzZHKW-5TMyUJqoC_0RZiqo3ERz9dQESJAcgP1XOtCSv8h0qi00nP9rSizPINYA3tP9K7BP5pR8nv/s1024/1757896644486%20(1).png // ضع رابط أيقونة الموقع
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
