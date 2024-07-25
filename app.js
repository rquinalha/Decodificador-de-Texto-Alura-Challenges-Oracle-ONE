function criptografarEEsconder() {
  
  document.querySelector("#lupaETexto").style.display = "none"; //os elementos da DIV com id="lupaETexto" serão ocultados (os elementos são: (o menino com a lupa e as mensagens do "h2" e "p")
  document.querySelector("#resultadoEBotao").style.display = "block"; //os elementos do id="resultadoEBotao" serão mostrados dentro do bloco-2 (isso inclui o resultado da encriptação e o botão "Copiar")

  let textoDigitado = document.querySelector("#digitar").value; // pega os valores dos textos digitados no id="digitar"
  let textoCriptografado = textoDigitado // aqui diz que os textos digitados no id="digitar" serão criptografados e as vogais serão substituidas pelas regras abaixo
    .replace(/e/g, "enter") // troca a vogal "e" por "enter"
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  
  document.querySelector("#digitar").value = ''; //apaga o texto digitado no id="digitar" após usar o botão "Criptografar"
  document.querySelector("#resultado").value = textoCriptografado; //exibe o texto criptografado no id= "resultado"
}

// copia a apaga o texto resultado que é exibido em <textarea> id="resultado"
function copiarEApagarTexto() {
  textarea = document.querySelector("#resultado"); // aqui diz que o <textarea> recebe texto do id="resultado", no caso o texto criptografado ou descriptografado
  textarea.select(); // seleciona todo o texto
  navigator.clipboard.writeText(textarea.value); //copia todo o texto criptografado ou descriptografado da área
  textarea.value = ''; // limpa a tela de resultado após clicar no botão "Copiar"
  document.querySelector("#digitar").value = ''; //apaga o texto digitado na <textarea> id="digitar" após usar o botão "Copiar"
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