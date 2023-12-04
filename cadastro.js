let passoAtual = 1;
const form1 = document.getElementById('Cadastro1');
const form2 = document.getElementById('Cadastro2');
const titulo1 = document.getElementById('titulo1');
const titulo2 = document.getElementById('titulo2');
const titulo3 = document.getElementById("titulo3");
const botoesForm1 = document.querySelector('#Cadastro1 .botoes');
const botoesForm2 = document.querySelector('#Cadastro2 .botoes');
const telaCadastro = document.querySelector('.telacadastro')
const campos = document.querySelector('.campos')

function mostrarForm1() {
  passoAtual = 1;
  form2.classList.remove('form2')
  form1.style.display = 'flex';
  form2.style.display = 'none'
  titulo1.textContent = 'Informações Pessoais';
  botoesForm1.style.display = 'flex';
  botoesForm2.style.display = 'none';
  telaCadastro.style.height = '84.07vh';
  campos.style.height = '60vh';
}
function mostrarForm2() {
  passoAtual = 2
  form2.classList.add('-form2')
  form1.style.display = 'none';
  form2.style.display = 'flex';
  titulo2.textContent = 'Informações Perfil';
  botoesForm1.style.display = 'none'; 
  botoesForm2.style.display = 'flex';
  botoesForm2.style.paddingBottom = '1vh';
  telaCadastro.style.height = '84.07vh';
  campos.style.height = '85vh';
}

window.onload = function() {
  mostrarForm1();
}
function proxPass() {
  if (passoAtual === 1) {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (nome && sobrenome && email && senha) {
      localStorage.setItem("nome", nome);
      localStorage.setItem("sobrenome", sobrenome);
      localStorage.setItem("email", email);
      localStorage.setItem("senha", senha);
      mostrarForm2();
    } else {
      mostrarPopup("Preencha os campos para prosseguir");
    }
  }
}
let idadeElement = document.getElementById("idade");
let idade = idadeElement.options[idadeElement.selectedIndex].text;
function passoAnt() {
  if (passoAtual === 2) {
    mostrarForm1()
  }
}
function mostrarPopup(mensagem) {
  const popup = document.getElementById('popup');
  const popupMensagem = document.getElementById('popupMensagem');
  popupMensagem.textContent = mensagem;
  popup.style.display = 'flex';
}
function ocultPopup() {
  document.getElementById('popup').style.display = 'none';
}
function cancelarCad() {
  localStorage.clear();
  window.location.href = 'login.html';
}
function fazerCad() {
  if (passoAtual === 2) {

    let nomeUsuario = document.getElementById("nomeUsuario").value;
    let pronomes = document.getElementById("Pronomes").value;
    let idadeElement = document.getElementById("idade");
    let idade = idadeElement.options[idadeElement.selectedIndex].text;
    if ( nomeUsuario && idade && pronomes) {
      localStorage.setItem("nomeUsuario", nomeUsuario);
      localStorage.setItem("idade", idade);
      localStorage.setItem("pronomes", pronomes);
      titulo3.textContent = "Seu Perfil";
      form2.style.display = "none";
      mostrarInfoPerfil();
    } else {
      mostrarPopup("Preencha todos os campos para concluir o cadastro");
    }
  }
}

function mostrarInfoPerfil() {
  let nomeUsuario = localStorage.getItem("nomeUsuario");
  let idade = localStorage.getItem("idade");
  let pronomes = localStorage.getItem("pronomes");

  let usuarioDiv = document.getElementById("usuarioDiv");
  usuarioDiv.innerHTML = "";
  let usuarioElement = document.createElement("p");
  usuarioElement.classList.add("Usuario");
  usuarioElement.textContent = nomeUsuario;
  usuarioDiv.appendChild(usuarioElement);

  let idadeDiv = document.getElementById("idadeDiv");
  idadeDiv.innerHTML = "";
  let idadeElement = document.createElement("p");
  idadeElement.classList.add("IdadeU");
  idadeElement.innerHTML = `<strong>Idade:</strong> ${idade}`;
  idadeDiv.appendChild(idadeElement);

  let pronomesDiv = document.getElementById("pronomesDiv");
  pronomesDiv.innerHTML = "";
  let pronomesElement = document.createElement("p");
  pronomesElement.classList.add("PronomesPerfil");
  pronomesElement.innerHTML = `<strong>Pronomes:</strong> ${pronomes}`;
  pronomesDiv.appendChild(pronomesElement);

  document.getElementById("perfil").style.display = "flex";
}



document.getElementById('fecharPopup').addEventListener('click', ocultPopup);