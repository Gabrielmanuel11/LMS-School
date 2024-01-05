// Seleciona o elemento de vídeo
var video = document.querySelector('.background-video');

// Adiciona o listener de mouseover
video.addEventListener('mouseover', function() {
  // Pausa o vídeo quando o mouse está sobre ele
  video.pause();
});

// Adiciona o listener de mouseout
video.addEventListener('mouseout', function() {
  // Retoma a reprodução do vídeo quando o mouse sai dele
  video.play();
});

var menuToggle = document.querySelector('.menu-toggle');
var nav = document

$(document).ready(function(){
  $('.testimonial-slider').slick({
    dots: true, // exibir os pontos de navegação
    infinite: true, // permitir a navegação infinita
    speed: 500, // velocidade de transição dos slides
    slidesToShow: 1, // quantidade de slides visíveis
    slidesToScroll: 1 // quantidade de slides que mudam por vez
  });
});

//Login
const firebaseConfig = {
  apiKey: "AIzaSyAyQ3saIkNm2LPeADxx4lmDBP0syQEMqqU",
  authDomain: "churchapp-edc32.firebaseapp.com",
  databaseURL: "https://churchapp-edc32-default-rtdb.firebaseio.com",
  projectId: "churchapp-edc32",
  storageBucket: "churchapp-edc32.appspot.com",
  messagingSenderId: "380744061125",
  appId: "1:380744061125:web:1932490836e93c683760ac",
  measurementId: "G-RJ37592SF1"
};
// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

var loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var email = loginForm.email.value;
  var password = loginForm.password.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
      // O usuário foi autenticado com sucesso
      console.log(user);
    })
    .catch(function(error) {
      // Houve um erro ao autenticar o usuário
      console.error(error);
    });
});
// Cadatro firebase
const db = firebase.firestore();

// Função para adicionar um usuário no Firestore
function addUser(email, password, name) {
  return db.collection("users").add({
    email: email,
    password: password,
    name: name
  });
}

const btnCadastro = document.getElementById("btnCadastro");

btnCadastro.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;

  addUser(email, password, name)
    .then(function() {
      console.log("Usuário adicionado com sucesso!");
    })
    .catch(function(error) {
      console.error("Erro ao adicionar usuário: ", error);
    });
});

// Exemplo de como mostrar mais informações ao clicar no nome do professor
const professores = document.querySelectorAll('.professor');

for (let i = 0; i < professores.length; i++) {
  const nomeProfessor = professores[i].querySelector('h2');
  const descricaoProfessor = professores[i].querySelector('p');
  const disciplinasProfessor = professores[i].querySelector('ul');
  
  nomeProfessor.addEventListener('click', () => {
    descricaoProfessor.classList.toggle('visivel');
    disciplinasProfessor.classList.toggle('visivel');
  });
}
