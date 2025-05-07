// ✅ Paste your Firebase config here
const firebaseConfig = {
    apiKey: "AIzaSyCg_IFZ-5C1Uk2pXSit_-GvHf_6S4fPW1s",
    authDomain: "shop-app-459018.firebaseapp.com",
    projectId: "shop-app-459018",
    storageBucket: "shop-app-459018.firebasestorage.app",
    messagingSenderId: "1062535490053",
    appId: "1:1062535490053:web:498d0e2b953d883d754a6c",
    measurementId: "G-XP6HQ18PJB"
  };
  
  // ✅ Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // 🔐 Signup function
  function signUp() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("✅ Signup successful!");
      })
      .catch((error) => {
        alert("❌ Signup Error: " + error.message);
      });
  }
  
  // 🔐 Login function
  function logIn() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("✅ Login successful!");
      })
      .catch((error) => {
        alert("❌ Login Error: " + error.message);
      });
  }
  