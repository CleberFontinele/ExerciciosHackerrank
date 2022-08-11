// Desenvolva um algoritmo que recebe todas as suas contas do mês, faça a soma dos valores e diminua do seu salário.
// Como saída mostre o salário, o total de gastos e o quanto irá sobrar no final do mês.

let gastos = {
  'condominio': 580,
  'agua': 40,
  'luz': 110,
  'internet': 90,
  'mercado': 800,
}

function despesasMes(gastos) {
  let salario = 5000;
  let despesas = Object.values(gastos).reduce((acc, curr) => acc + curr)

   return `Seu sálario foi de: R$${salario.toFixed(2)}, as despesas foi: R$${despesas.toFixed(2)}, e o que sobrou foi R$${(salario - despesas).toFixed(2)}`
}

console.log(despesasMes(gastos));