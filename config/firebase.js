import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgZodqduLipqMZPJDeVAa30u-9TM4XDCY",
  authDomain: "fir-course-4fdfb.firebaseapp.com",
  projectId: "fir-course-4fdfb",
  storageBucket: "fir-course-4fdfb.appspot.com",
  messagingSenderId: "1092875437702",
  appId: "1:1092875437702:web:6ebc6024cf80021a82b307",
  measurementId: "G-VFYKKE0M4W",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
