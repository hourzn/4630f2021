// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDiqa1ejBq3cQ_Tc_UVXFhN7Kl4vdw0hw0',
    authDomain: 'resell-auth.firebaseapp.com',
    projectId: 'resell-auth',
    storageBucket: 'resell-auth.appspot.com',
    messagingSenderId: '878248709995',
    appId: '1:878248709995:web:b8f014e948ad84dcdd062e',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };
