// Imimport { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // ... sua configuração do Firebase ...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    enviarMensagem();
  });

  async function enviarMensagem() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Validar campos aqui, se necessário

    try {
      const docRef = await addDoc(collection(db, "mensagens"), {
        nome: nome,
        email: email,
        mensagem: mensagem,
      });

      console.log("Documento adicionado com ID: ", docRef.id);

      // Limpar campos do formulário após o envio
      document.getElementById("nome").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mensagem").value = "";
    } catch (error) {
      console.error("Erro ao enviar mensagem: ", error);
    }
  }

  var firebaseConfig = {
    apiKey: "AIzaSyChV2t45AXLB2vr27W-cYu7GAI1c2R4N0A",
    authDomain: "satisfaction-survey-49beb.firebaseapp.com",
    projectId: "satisfaction-survey-49beb",
    storageBucket: "satisfaction-survey-49beb.appspot.com" ,
    messagingSenderId: "693766354995",
    appId: "693766354995"
  };
  firebase.initializeApp(firebaseConfig);
});
