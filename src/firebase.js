// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDr3MSLQ0yrnVdoBfViqH8vPAycL_X_HJg",
//   authDomain: "clothecommerce-b03e8.firebaseapp.com",
//   projectId: "clothecommerce-b03e8",
//   storageBucket: "clothecommerce-b03e8.appspot.com",
//   messagingSenderId: "106088346570",
//   appId: "1:106088346570:web:47a6eedbdc3083c7301533",
//   measurementId: "G-D4L455M4YZ",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDr3MSLQ0yrnVdoBfViqH8vPAycL_X_HJg",
  authDomain: "clothecommerce-b03e8.firebaseapp.com",
  projectId: "clothecommerce-b03e8",
  storageBucket: "clothecommerce-b03e8.appspot.com",
  messagingSenderId: "106088346570",
  appId: "1:106088346570:web:47a6eedbdc3083c7301533",
  measurementId: "G-D4L455M4YZ",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
