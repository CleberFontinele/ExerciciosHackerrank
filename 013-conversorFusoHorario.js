// Sabendo que o fuso horário da França em relação ao Brasil é de +5 horas (no horário de verão na França),
// elaborar um programa que leia a hora no Brasil e informe a hora na França.

function fusoHorario() {
  let data = new Date();
  let horaBrasil = data.getHours();
  let horaFranca = horaBrasil + 5;
  let minutos = data.getMinutes();

  horaFranca > 24 ? (horaFranca = horaFranca - 24) : horaFranca;

  return `Brasil: ${horaBrasil}:${minutos} 
França: ${horaFranca}:${minutos}`;
}

console.log(fusoHorario());
