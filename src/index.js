import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBKPR0Uwq4Z86mZhjXoWwlTWjeF_zEY3Mg",
//   authDomain: "site-clone-6db61.firebaseapp.com",
//   projectId: "site-clone-6db61",
//   storageBucket: "site-clone-6db61.appspot.com",
//   messagingSenderId: "38925147712",
//   appId: "1:38925147712:web:3a3291336241e56019c9a5"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// // Firebase authentication
// const auth = getAuth(firebaseApp);
