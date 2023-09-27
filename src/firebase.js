// import firebase from "firebase";
// import { initializeApp } from 'firebase/app';



// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyDD-km279BpK1321-rZOvgE6bC0A7N-1y8",
//     authDomain: "facebook-399b2.firebaseapp.com",
//     projectId: "facebook-399b2",
//     storageBucket: "facebook-399b2.appspot.com",
//     messagingSenderId: "603573678741",
//     appId: "1:603573678741:web:7e36cc4d847bb1d9e3a19c"
//   });

//   const db = firebaseApp.firestore();

//   export default db;
  
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  
  const firebaseConfig = {
    apiKey: "AIzaSyDD-km279BpK1321-rZOvgE6bC0A7N-1y8",
    authDomain: "facebook-399b2.firebaseapp.com",
    projectId: "facebook-399b2",
    storageBucket: "facebook-399b2.appspot.com",
    messagingSenderId: "603573678741",
    appId: "1:603573678741:web:7e36cc4d847bb1d9e3a19c"
  };
  
  // Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };