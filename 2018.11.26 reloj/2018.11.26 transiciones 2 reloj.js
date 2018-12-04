/**
 * Funcion encargada de elmininar el boton encargado de Cambiar la poscion del reloj
 */
function eliminarBoton(){
    var b = botones.getElementsByTagName('button');
    botones.removeChild(b[b.length-1]);
}
/**
 * Funcion encargada de rotar cada manecilla, de forma que sean directamente proporcionales
 * produciendose un efecto cascada
 */
function actualizar(){
    degms+=3.6;
    milisegundero.style.transform=`rotate(${degms}deg)`
    degs+=0.06;
    segundero.style.transform=`rotate(${degs}deg)`
    degm+=0.06/60;
    minutero.style.transform=`rotate(${degm}deg)`
    degh+=(0.001/12);
    horario.style.transform=`rotate(${degh}deg)`
}
/**
 * Asigna al conjunto formado por el reloj la clase CSS di y modifica el boton
 * "cambiar tamaño" para que al clickear sobre el llame a maximizar()
 */
function minimizar(){
    esfera.setAttribute("class","di");
    milisegundero.setAttribute("class","di");
    segundero.setAttribute("class","di");
    minutero.setAttribute("class","di");
    horario.setAttribute("class","di");
    eliminarBoton();
    var b=document.createElement('button');
    var texto = document.createTextNode(`Cambiar tamaño`);
    b.appendChild(texto);
    b.addEventListener('click',maximizar)
    botones.appendChild(b);
}
/**
 * Asigna al conjunto formado por el reloj la clase CSS reloj y modifica el boton
 * "cambiar tamaño" para que al clickear sobre el llame a minimizar()
 */
function maximizar(){
    esfera.setAttribute("class","reloj");
    milisegundero.setAttribute("class","reloj");
    segundero.setAttribute("class","reloj");
    minutero.setAttribute("class","reloj");
    horario.setAttribute("class","reloj");
    eliminarBoton();
    var b=document.createElement('button');
    var texto = document.createTextNode(`Cambiar tamaño`);
    b.appendChild(texto);
    b.addEventListener('click',minimizar)
    botones.appendChild(b);
}
/**
 * Se encarga de asignar a cada manecilla el instante horario actual correspondiente.
 *
 */
function horaActual(){
    clearInterval(intervalo);
    var d=new Date();
    var milisegundos = d.getMilliseconds();
    var segundos = d.getSeconds();
    var minutos= d.getMinutes()
    var horas = (d.getHours()*60+d.getMinutes())/60;
    degms=360*milisegundos;
    degs=6*segundos;
    degm=6*minutos+degs*1/60;
    degh=(360/12)*horas;
    setInterval(actualizar, 10);
    setTimeout(minimizar, 10000);
}

degms = 0;
degs = 0;
degm = 0;
degh = 0;
var intervalo = setInterval(actualizar, 10);
/**
 * Asignamos los eventos
 */
window.onload = function(){
    boton.addEventListener('click',horaActual);
}
