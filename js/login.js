
  // Importar Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  // 🔹 Configuración de tu proyecto Firebase (reemplaza con la tuya)
  const firebaseConfig = {
    apiKey: "AIzaSyCKOS3Y3Y7vUogAcTSe_C0jzBdjLLbawNY",
    authDomain: "login-familiasqueinspiran.firebaseapp.com",
    projectId: "login-familiasqueinspiran",
    storageBucket: "login-familiasqueinspiran.firebasestorage.app",
    messagingSenderId: "604913869429",
    appId: "1:604913869429:web:3d29bbb550f372a3ec4e3c",
  };

  // Inicializar Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // 🔹 Login con correo y contraseña
  document.getElementById("logInForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("lemail").value;
    const password = document.getElementById("lpassword").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        alert("✅ Bienvenido " + userCredential.user.email);
        // Redirigir al dashboard o página principal
        window.location.href = "formularios.html";
      })
      .catch(error => {
        alert("❌ Error: " + error.message);
      });
  });