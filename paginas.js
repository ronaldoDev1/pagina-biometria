function redirecionarParaPaginaAleatoria() {
  var escolhaAleatoria = Math.random() < 0.5 ? "pagina1.html" : "pagina2.html";
  window.location.href = escolhaAleatoria;
}

document
  .getElementById("imagem")
  .addEventListener("click", redirecionarParaPaginaAleatoria);
