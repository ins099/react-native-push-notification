import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCb1_4XnUhr8qGWnywBEp4UWooUdVW0XkM',
  authDomain: 'pushnotification-47ac0.firebaseapp.com',
  databaseURL: 'https://pushnotification-47ac0.firebaseio.com',
  projectId: 'pushnotification-47ac0',
  storageBucket: 'pushnotification-47ac0.appspot.com',
  messagingSenderId: '530229322934',
  appId: '1:530229322934:android:732981e5edd4fa1d43b217',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
