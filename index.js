function mostrarResultado() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let showImc = document.getElementById("label-imc");
  let showAgua = document.getElementById("label-agua");
  let contentImc = document.getElementById("content-imc");
  let contentAgua = document.getElementById("content-agua");

  let ingestaoIdealAgua = 0.035;
  let resultadoImc;
  let alturaMetros = altura / 100;

  let imc = peso / (alturaMetros * alturaMetros);

  let ingestaoAgua = peso * ingestaoIdealAgua;

  if (peso.length > 0 && altura.length > 0) {
    if (imc < 18.5) {
      resultadoImc = "Abaixo do peso";
    } else if (imc < 25) {
      resultadoImc = "Peso normal";
    } else if (imc < 30) {
      resultadoImc = "Sobrepeso";
    } else if (imc < 40) {
      resultadoImc = "Obesidade";
    } else {
      resultadoImc = "Obesidade grave";
    }

    showImc.textContent = "Seu IMC é: " + formatarNumeros(imc);
    contentImc.textContent = resultadoImc;
    showAgua.textContent = "Ingestão ideal diária de água";
    contentAgua.textContent = formatarNumeros(ingestaoAgua) + " litros";

    document.getElementById("imc").style.display = "flex";
    document.getElementById("agua").style.display = "flex";
  } else {
    alert("Preencha os campos vazios!");
  }
}

function limparResultado() {
  document.getElementById("imc").style.display = "none";
  document.getElementById("agua").style.display = "none";
}

function formatarNumeros(numero) {
  const ordem = Math.pow(10, 2);
  return Math.floor(numero * ordem) / ordem;
}
