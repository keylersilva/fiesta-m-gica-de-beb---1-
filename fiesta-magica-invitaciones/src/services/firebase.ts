import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  projectId: "netflixprueba-1748475365776",
  appId: "1:63082207877:web:5db6fb6fd6ccb26b08e7ec",
  apiKey: "AIzaSyCFcQdZujfTYkrEcWEbwMO_Lm1tHuu-z-0",
  authDomain: "netflixprueba-1748475365776.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-db1ce743-73ff-4589-9ba7-a4d41fe349f2",
  storageBucket: "netflixprueba-1748475365776.firebasestorage.app",
  messagingSenderId: "63082207877",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };