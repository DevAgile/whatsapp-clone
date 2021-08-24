import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZIGEEPAjTX4IKGG32Y214tDnsy51VRmw",
    authDomain: "whatsapp-clone-649c7.firebaseapp.com",
    projectId: "whatsapp-clone-649c7",
    storageBucket: "whatsapp-clone-649c7.appspot.com",
    messagingSenderId: "45989994050",
    appId: "1:45989994050:web:0b6a46724da317df7617db",
    measurementId: "G-9FBW57GWW0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;