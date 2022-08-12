import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfSYpb2uazhdRBy4mRz-NP5J55Ml7r1vY",
  authDomain: "d-shirt-3b2cd.firebaseapp.com",
  projectId: "d-shirt-3b2cd",
  storageBucket: "d-shirt-3b2cd.appspot.com",
  messagingSenderId: "19742915651",
  appId: "1:19742915651:web:20d8bdb2658202568da8f6"
};

const app = initializeApp(firebaseConfig);

export default function iniFirebase(){
    return app
}