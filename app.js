var fecha = new Date(); // objeto fecha actual // var porque es la unica que es modificable dentro de una function

 var numDiasSemana = fecha.getDay();
 console.log(numDiasSemana);
function textodia(fecha,numDiasSemana){
    
    var diasDeSemana = new Array('Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado');
    var diasLetras =  diasDeSemana[fecha.getDay()]; // llamo a fecha
    
      
    
    return diasLetras;
 } 
 console.log(textodia(fecha));
 let darleColor = document.getElementById('diaSemana');
     darleColor.style.color = 'rgb(13, 23, 173)'; 
 if(numDiasSemana % 2 == 0){    // le di color cuando es un dia par
   let colorDinamico = document.getElementById('diaSemana');
    console.log('hola esta mostrado en consola');
    colorDinamico.style.color = '#f37121';
   }
 
 

    function textoMes(fecha){
    var Mes = new Array( 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
    var mesLetra = Mes[fecha.getMonth()];
    
    return mesLetra;
    }
    console.log(textoMes(fecha));
    if(fecha.getMonth() % 2 !==0){  // le di color cuando es un mes impar
       console.log('No es par este mes');
       let colorDinamicoMes = document.getElementById('mesLetra');
       colorDinamicoMes.style.color = '#111d5e';
       
    }
    
    var diaMes = (fecha.getDate());
    console.log(diaMes);
    if(diaMes % 2 !==0 ){ // le di color cuando es un dia impar
      let colorDinamicoDiaMes = document.getElementById('dia');
       console.log('hola,otra vez yo');
       colorDinamicoDiaMes.style.color = '#ffbd69';
      }
    // document.getElementById('diaSemana').innerHTML = textodia(fecha);
    // console.log(textodia(fecha));
     document.getElementById('diaSemana').innerHTML = textodia(fecha) ;
    
    console.log(dia);
    document.getElementById('dia').innerHTML = diaMes;
    document.getElementById('mesLetra').innerHTML = textoMes(fecha);
    console.log(mesLetra);