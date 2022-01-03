importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
                           apiKey: "AIzaSyBLJfNt5Rp_08jdKh6CE17qY3j9495borM",
                           authDomain: "kodiak-e7bd3.firebaseapp.com",
                           projectId: "kodiak-e7bd3",
                           storageBucket: "kodiak-e7bd3.appspot.com",
                           messagingSenderId: "77721293977",
                           appId: "1:77721293977:web:53549d0c1926ea03a99408",
                           measurementId: "G-3QYVMQ1S7S"
                         };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });