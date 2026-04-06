import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fixTestimonials() {
  const testimonials = [
    {
      name: 'Carlos Mario Restrepo',
      content: 'Excelente asesoría para mi crédito de vivienda. Sebastián me ayudó a entender las tasas y elegir la mejor opción. Muy recomendado.'
    },
    {
      name: 'Claudia Elena Moreno',
      content: 'La compra de cartera me ahorró mucho dinero mensualmente. Gracias por la transparencia y el tiempo dedicado.'
    },
    {
      name: 'Andrés Felipe Giraldo',
      content: 'Un servicio muy profesional y humano. Lo mejor es que la asesoría inicial fue totalmente gratuita y muy clara.'
    }
  ];

  for (const t of testimonials) {
    const q = query(collection(db, "testimonials"), where("name", "==", t.name));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (document) => {
      const docRef = doc(db, "testimonials", document.id);
      await updateDoc(docRef, { content: t.content });
      console.log(`Updated ${t.name}`);
    });
  }
}

fixTestimonials();
