import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCrrdUs_f7MsbkfH6VcpYyh525nh8yVTyY",
    authDomain: "litter-be7cc.firebaseapp.com",
    projectId: "litter-be7cc",
    storageBucket: "litter-be7cc.appspot.com",
    messagingSenderId: "855201416994",
    appId: "1:855201416994:web:8debd15327a124e061477b"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
prompt: 'select_account'
});

export const db = getFirestore(app)

  
