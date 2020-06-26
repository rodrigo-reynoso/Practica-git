// agregue formato con las reglas de prettier- Code formatter...fui a settings y luego di tilde a format on save para que me formate automaticamente cuando guardo

var fecha = new Date(); // objeto fecha actual // var porque es la unica que es modificable dentro de una function

var numDiasSemana = fecha.getDay();
console.log(numDiasSemana);
function textodia(fecha) {
  var diasDeSemana = new Array(
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  );
  var diasLetras = diasDeSemana[fecha.getDay()]; // llamo a fecha

  return diasLetras;
}
console.log(textodia(fecha));

function diaSemanaPar(fecha) {
  return fecha.getDay() % 2 == 0;
}
if (diaSemanaPar(fecha)) {
  const colorDiaSemanaPar = document.getElementById("diaSemana");
  console.log("dandole color al dia de la semana");
  colorDiaSemanaPar.style.color = "#12cad6";
}

function textoMes(fecha) {
  var Mes = new Array(
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  );
  var mesLetra = Mes[fecha.getMonth()];

  return mesLetra;
}
console.log(textoMes(fecha));

function esMesImpar(fecha) {
  return fecha.getMonth() % 2 !== 0;
}
if (esMesImpar(fecha)) {
  console.log("dandole color al mes");
  const colorMesImpar = document.getElementById("mesLetra");
  colorMesImpar.style.color = "#f37121";
}

function diaMesImpar(fecha) {
  return fecha.getDate() % 2 !== 0;
}
if (diaMesImpar(fecha)) {
  const colorDiaMesImpar = document.getElementById("dia");
  console.log("dandole color al dia");
  colorDiaMesImpar.style.color = "#ffbd69";
}

 
// document.getElementById('diaSemana').innerHTML = textodia(fecha);
// console.log(textodia(fecha));
document.getElementById("diaSemana").innerHTML = textodia(fecha);
document.getElementById("dia").innerHTML = fecha.getDate();
document.getElementById("mesLetra").innerHTML = textoMes(fecha);
console.log(dia);
console.log(mesLetra);
