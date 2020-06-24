import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  databaseURL: "https://xxx.firebaseio.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xxx",
  appId: "xxx"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

/* firebaseApp.firestore().settings({ timestampsInSnapshots: true }); */

export default firebaseApp.firestore();