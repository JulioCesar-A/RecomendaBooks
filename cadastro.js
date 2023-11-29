let passoAtual = 1;
const form1 = document.getElementById('Cadastro1');
const form2 = document.getElementById('Cadastro2');
const titulo = document.getElementById('titulo');
const botoesForm1 = document.querySelector('#Cadastro1 .botoes');
const botoesForm2 = document.querySelector('#Cadastro2 .botoes');
const telaCadastro = document.querySelector('.telacadastro')
const campos = document.querySelector('.campos')

function mostrarForm1() {
  form2.classList.remove('form2')
  form1.style.display = 'flex';
  form2.style.display = 'none'
  titulo.textContent = 'Informações Pessoais';
  botoesForm1.style.display = 'flex';
  botoesForm2.style.display = 'none';
  telaCadastro.style.height = '84.07vh';
  campos.style.height = '55vh';
}

function mostrarForm2() {
  form2.classList.add('form2')
  form1.style.display = 'none';
  form2.style.display = 'flex';
  titulo.textContent = 'Informações Perfil';
  botoesForm1.style.display = 'none'; 
  botoesForm2.style.display = 'flex';
  telaCadastro.style.height = '104.07vh';
  campos.style.height = '75vh';
}
function mostrarPopup(mensagem) {
  // Exibir
  document.getElementById('popup').style.display = 'block';

  // Atualizar a mensagem
  document.getElementById('popupMensagem').textContent = mensagem;
}

function ocultPopup() {
  // Ocultar
  document.getElementById('popup').style.display = 'none';
}


window.onload = function() {
  mostrarForm1();
};

function proxPass() {
  if (passoAtual === 1) {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (nome && sobrenome && email && senha) {
      mostrarForm2();
      passoAtual = 2
    }
  } else {
    mostrarPopup("Preencha os campos para prosseguir");
  }
}
function passoAnt() {
  if (passoAtual === 2) {
    mostrarForm1()
  }
}

function cancelarCad() {
  localStorage.clear();
  window.location.href = 'login.html';
}
function fazerCad() {
  if (passoAtual === 2) {
    let imagemFundo = document.getElementById("imagemFundo").files[0];
    let imagemPerfil = document.getElementById("imagemPerfil").files[0];
    let nomeUsuario = document.getElementById("nomeUsuario").value;
    let pronomes = document.getElementById("pronomes").value;
    let idade = document.getElementById("idade").value;
    let mostrarIdade = document.getElementById("mostrarIdade").checked;
    let mostrarPronomes = document.getElementById("mostrarPronomes").checked;

  if (imagemFundo && imagemPerfil && nomeUsuario && idade) {
    alert("Cadastro bem-sucedido!");

    localStorage.setItem("imagemFundo", URL.createObjectURL(imagemFundo));
    localStorage.setItem("imagemPerfil", URL.createObjectURL(imagemPerfil));
    localStorage.setItem("nomeUsuario", URL.createObjectURL(nomeUsuario));
    localStorage.setItem("idade", URL.createObjectURL(idade));
    localStorage.setItem("pronomes", URL.createObjectURL(pronomes));
    localStorage.setItem("mostrarIdade", URL.createObjectURL(mostrarIdade));
    localStorage.setItem("mostrarPronomes", URL.createObjectURL(mostrarPronomes),);
    window.location.href = "perfil.html";
  }
}
}

function mostrarInfoPerfil() {
  let nomeUsuario = localStorage.getItem("nomeUsuario");
  let idade = localStorage.getItem("idade");
  let pronomes = localStorage.getItem("pronomes");
  let mostrarIdade = localStorage.getItem("mostrarIdade");
  let mostrarPronomes = localStorage.getItem("mostrarIdade");
}
