document
  .querySelector("#digitar")
  .addEventListener("input", function (bloqueioDigitar) {
    let areaDigitar = bloqueioDigitar.target;
    // Não permite digitar letras maiúsculas, números e caracteres especiais
    areaDigitar.value = areaDigitar.value.replace(/[^a-z\s]/g, "");
  });

function criptografarEEsconder() {
  document.querySelector("#menino-lupa").style.display = "none"; //IMG do menino com a lupa será ocultado
  document.querySelector("#textos").style.display = "none"; // os textos dentro da caixa-vazia serão ocultados
  document.querySelector("#resultado").style.display = "block"; //o campo resultado que estava oculto será mostrado
  document.querySelector("#botao-copiar").style.display = "block"; //o botão COPIAR que estava oculto será mostrado

  let textoDigitado = document.querySelector("#digitar").value; // pega os valores dos textos digitados no id="digitar"
  let textoCriptografado = textoDigitado // aqui diz que os textos digitados no id="digitar" serão criptografados e as vogais serão substituidas pelas regras abaixo
    .replace(/e/g, "enter") // troca a vogal "e" por "enter"
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.querySelector("#digitar").value = ""; //apaga o texto digitado no id="digitar" após usar o botão "Criptografar"
  document.querySelector("#resultado").value = textoCriptografado; //exibe o texto criptografado no id= "resultado"
}

// copia a apaga o texto resultado que é exibido em <textarea> id="resultado"
function copiarEApagarTexto() {
  textarea = document.querySelector("#resultado"); // aqui diz que o <textarea> recebe texto do id="resultado", no caso o texto criptografado ou descriptografado
  textarea.select(); // seleciona todo o texto
  navigator.clipboard.writeText(textarea.value); //copia todo o texto criptografado ou descriptografado da área
  textarea.value = ""; // limpa a tela de resultado após clicar no botão "Copiar"
  document.querySelector("#digitar").value = ""; //apaga o texto digitado na <textarea> id="digitar" após usar o botão "Copiar"
}

// descriptografa o texto digitado na <textarea> id="digitar" e mostra o resultado na <textarea> id="resultado"
function descriptografarTexto() {
  let textoDigitado = document.querySelector("#digitar").value; // pega os valores dos textos digitados no id="digitar"
  let textoDescriptografado = textoDigitado // aqui diz que os textos digitados no id="digitar" serão descriptografados
    .replace(/enter/g, "e") // troca "enter" pela vogal "e"
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.querySelector("#resultado").value = textoDescriptografado; //exibe o texto descriptografado em <textarea> id="resultado"
}

// função para tablets
function reordenar() {
  if (window.innerWidth >= 1023) {
    // se a resolução da tela for maior ou igual a 1023px, não faz nada e retorna a função
    return;
  } else {
    document.querySelector("footer").style.gridRow = "8"; // Coloca o footer na linha 8 do grid
    document.querySelector("footer").style.alignSelf = "start"; // Alinha o footer no topo
    document.querySelector("#caixa-vazia").style.height = "343px"; // aumenta o tamanho da caixa
    document.querySelector("#caixa-vazia").style.alignSelf = "start"; // Alinha a caixa no topo
  }
}

// função para celulares
function reordenarCelular() {
  if (window.innerWidth >= 767) {
    // se a resolução da tela for maior ou igual a 767px, não faz nada e retorna a função
    return;
  } else {
    document.querySelector("footer").style.gridRow = "9"; // Coloca o footer na linha 9 do grid
    document.querySelector("footer").style.alignSelf = "center"; // Alinha o footer no topo
    document.querySelector("#caixa-vazia").style.height = "343px"; // aumenta o tamanho da caixa
    document.querySelector("#caixa-vazia").style.alignSelf = "start";
  }
}

//Executa o alerta ao carregar a página quando estiver em celulares
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 767) {
    alert("Para melhor visualização, use o tema claro em seu navegador!");
  }
});
