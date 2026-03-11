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
    apiKey: "TU_API_KEY_AQUI",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto-id",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
