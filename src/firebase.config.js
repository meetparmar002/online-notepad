import {initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCrodWJQMiVXJTU0QUS9zaVUFwhJ2O_bE0",
  authDomain: "online-notepad-e0ac4.firebaseapp.com",
  projectId: "online-notepad-e0ac4",
  storageBucket: "online-notepad-e0ac4.appspot.com",
  messagingSenderId: "221144266706",
  appId: "1:221144266706:web:5192f7e356cd6be11bba0b",
  measurementId: "G-N2PZHP8BNF"
};
  
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
