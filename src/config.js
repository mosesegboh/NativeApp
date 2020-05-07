import Firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAephpJ4XuiBV1unkvLeCsQTyM8hf5u6vw",
  authDomain: "todoapp-42eae.firebaseapp.com",
  databaseURL: "https://todoapp-42eae.firebaseio.com",
  projectId: "todoapp-42eae",
  storageBucket: "todoapp-42eae.appspot.com",
  messagingSenderId: "657187391620",
  appId: "1:657187391620:web:9e287975e490a23d3f9ad1",
  measurementId: "G-7747BHD8EE"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
