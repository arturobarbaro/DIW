/**
 * Funcion encargada de elmininar el boton encargado de Cambiar la poscion del reloj
 */
function eliminarBoton(){
    var b = document.getElementById("botones").getElementsByTagName('button');
    document.getElementById("botones").removeChild(b[b.length-1]);
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
    document.getElementById('esfera').setAttribute("class","di");
    document.getElementById('milisegundero').setAttribute("class","di");
    document.getElementById('segundero').setAttribute("class","di");
    document.getElementById('minutero').setAttribute("class","di");
    document.getElementById('horario').setAttribute("class","di");
    eliminarBoton();
    var b=document.createElement('button');
    var texto = document.createTextNode(`Cambiar tamaño`);
    b.appendChild(texto);
    b.addEventListener('click',maximizar)
    document.getElementById('botones').appendChild(b);
}
/**
 * Asigna al conjunto formado por el reloj la clase CSS reloj y modifica el boton
 * "cambiar tamaño" para que al clickear sobre el llame a minimizar()
 */
function maximizar(){
    document.getElementById('esfera').setAttribute("class","reloj");
    document.getElementById('milisegundero').setAttribute("class","reloj");
    document.getElementById('segundero').setAttribute("class","reloj");
    document.getElementById('minutero').setAttribute("class","reloj");
    document.getElementById('horario').setAttribute("class","reloj");
    eliminarBoton();
    var b=document.createElement('button');
    var texto = document.createTextNode(`Cambiar tamaño`);
    b.appendChild(texto);
    b.addEventListener('click',minimizar)
    document.getElementById('botones').appendChild(b);
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
    degs=6*segundos+degms*1/1000;
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
 * Agidnamos los eventos
 */
window.onload = function(){
    boton.addEventListener('click',horaActual);
}
