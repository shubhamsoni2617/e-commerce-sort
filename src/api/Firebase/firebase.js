import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAQBtXnnfM6oveuRmftyUIGQc1pXKMdt0U",
    authDomain: "fir-client-9cbbd.firebaseapp.com",
    databaseURL: "https://fir-client-9cbbd.firebaseio.com",
    projectId: "fir-client-9cbbd",
    storageBucket: "fir-client-9cbbd.appspot.com",
    messagingSenderId: "739686447245",
    appId: "1:739686447245:web:93378a0f4db2cfa4"
  };

  firebase.initializeApp(config);

  const storage= firebase.storage()

  const database= firebase.database()
  
  export  { storage, database };