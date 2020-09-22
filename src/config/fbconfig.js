import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCq_hC9CbX5KVudPvkNhNf-p98Kif73sLE",
  authDomain: "mario-plan-2fb4b.firebaseapp.com",
  databaseURL: "https://mario-plan-2fb4b.firebaseio.com",
  projectId: "mario-plan-2fb4b",
  storageBucket: "mario-plan-2fb4b.appspot.com",
  messagingSenderId: "305748219116",
  appId: "1:305748219116:web:86efc29d9cb95df7fa01c9",
  measurementId: "G-3HTYJTH63H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;