// Desenvolva um algoritmo para calcular o peso ideal de uma pessoa.
// O peso ideal de um adulto pode ser calculado a partir das fórmulas
// 22 * altura² (homens)
// 21 * altura² (mulheres)

function pesoIdeal(altura, sexo) {
  let peso = 0;

  if (sexo === "Masculino") {
    return `Seu peso Ideal é: ${(peso = 22 * Math.pow(altura, 2)).toFixed(3)} Kg`;
  } else if (sexo === "Feminino") {
    return `Seu peso Ideal é: ${(peso = 21 * Math.pow(altura, 2)).toFixed(3)}Kg`;
  } else {
    return "Outro";
  }
}

console.log(pesoIdeal(1.6, "Masculino"));
