import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { HashRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKPR0Uwq4Z86mZhjXoWwlTWjeF_zEY3Mg",
  authDomain: "site-clone-6db61.firebaseapp.com",
  projectId: "site-clone-6db61",
  storageBucket: "site-clone-6db61.appspot.com",
  messagingSenderId: "38925147712",
  appId: "1:38925147712:web:3a3291336241e56019c9a5",
};

// Initialize Firebase
initializeApp(firebaseConfig);
