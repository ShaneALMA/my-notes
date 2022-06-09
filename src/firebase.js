import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAbYWto2iU4yxMK2QN1WVoNRuckWem1GiA",
  authDomain: "my-notes-861c0.firebaseapp.com",
  projectId: "my-notes-861c0",
  storageBucket: "my-notes-861c0.appspot.com",
  messagingSenderId: "902124035437",
  appId: "1:902124035437:web:d0c976b20eab3165634e64"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }