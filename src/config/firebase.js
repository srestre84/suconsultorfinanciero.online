// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// =========================================================================
// INSTRUCCIONES PARA SEBASTIÁN:
// 1. Ve a https://console.firebase.google.com/ y crea un proyecto gratuito.
// 2. Haz clic en el ícono de "Web" (</>) para registrar una app.
// 3. Copia el objeto "firebaseConfig" que te dan allí y pégalo aquí abajo:
// =========================================================================

const firebaseConfig = {
    apiKey: "AIzaSyC5g3aA1QKsCYmvExw98Pd3EkN53_-4I7o",
    authDomain: "su-consultor-financiero.firebaseapp.com",
    projectId: "su-consultor-financiero",
    storageBucket: "su-consultor-financiero.firebasestorage.app",
    messagingSenderId: "335429717413",
    appId: "1:335429717413:web:e0307d4abf9563c6272c4c",
    measurementId: "G-Y3ZNYF1S3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
