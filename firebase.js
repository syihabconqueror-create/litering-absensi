// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getDatabase, ref, push, set, get, child } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

// Konfigurasi Firebase dari proyek kamu
const firebaseConfig = {
  apiKey: "AIzaSyDGVM5T-us2R19M-zLmVbMh-NUgjg3Af68",
  authDomain: "litering-absensi.firebaseapp.com",
  databaseURL: "https://litering-absensi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "litering-absensi",
  storageBucket: "litering-absensi.firebasestorage.app",
  messagingSenderId: "529191002867",
  appId: "1:529191002867:web:d751dddb59e230f08acd86",
  measurementId: "G-VGRF516G18"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);