import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBsIA1ggkXGuVuujWO05M7pa22olvmS_rQ",
    authDomain: "shadow-scribe.firebaseapp.com",
    databaseURL: "https://shadow-scribe-default-rtdb.firebaseio.com",
    projectId: "shadow-scribe",
    storageBucket: "shadow-scribe.appspot.com",
    messagingSenderId: "77740236217",
    appId: "1:77740236217:web:e22180d138b6e050996a68",
    measurementId: "G-SSF16MZMRZ"
};

// ✅ Initialize Firebase once and export
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
