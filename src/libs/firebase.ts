import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const app = getApps().length
  ? getApp()
  : initializeApp({
      apiKey: "AIzaSyCzfokIkxaiDMcqUrY0xnGC24iS4rWTvVo",
      authDomain: "guided-example-426ef.firebaseapp.com",
      projectId: "guided-example-426ef",
      storageBucket: "guided-example-426ef.firebasestorage.app",
      messagingSenderId: "927240569893",
      appId: "1:927240569893:web:d9026923579e8a70b2abcc",
      measurementId: "G-JS9HD1NLHY",
    });

export const db = getFirestore(app);
export const functions = getFunctions(app);
