/* eslint-disable no-console */





import validator from './validator.js';
const botonValidar = document.getElementById('boton');
botonValidar.addEventListener('click',traernumero);

function traernumero(){
 var numero = document.getElementById('numero').value;
console.log(numero);   
validator.isValid(numero)
console.log(validator.isValid(numero))
validator.maskify(numero)
console.log(validator.maskify(numero))
}
//const botonpasar = document.getElementById('boton1');
//botonpasar.addEventListener('click',pasar1);

function pasar1(){
 var elem=document.getElementById('platosfuertes');
 elem.style.display = "block";
 var elem1 =document.getElementById('primerscreen');
 elem1.style.display = "none";
}
document.getElementById('boton1').onclick = function (){
    pasar1();
    
}
function pasar2(){
    var elem2=document.getElementById('screenpostres');
    elem2.style.display = "block";
    var elem3 =document.getElementById('primerscreen');
    elem3.style.display = "none";
   }
   document.getElementById('boton2').onclick = function (){
       pasar2();
}
function pasar3(){
    var elem4=document.getElementById('seccionbebidas');
    elem4.style.display = "block";
    var elem5 =document.getElementById('primerscreen');
    elem5.style.display = "none";
   }
   document.getElementById('boton3').onclick = function (){
       pasar3();
   }
function pasar4(){
   alert("Su compra ha sido registrada en unos minutos llegara su pedido")
   let nombre= document.querySelector('ingrese su nombre')
   console.log(nombre);
}
    document.getElementById('boton4').onclick = function (){
        pasar4();
   }

const botoncarrito = document.getElementsByClassName('carrito')
for (let i = 0; i < botoncarrito.length; i++) {
    botoncarrito[i].addEventListener("click", () =>{

    var elem10=document.getElementById('datos');
    elem10.style.display = "block";
    var elem11=document.getElementById('form');
    elem11.style.display = "block";
    var elem12=document.getElementById('platosfuertes');
    elem12.style.display = "none";
    var elem13=document.getElementById('seccionbebidas');
    elem13.style.display = "none";
    var elem14=document.getElementById('screenpostres');
    elem14.style.display = "none";

    })
}
const botondevolver = document.getElementsByClassName('devolver')
for (let i = 0; i < botondevolver.length; i++) {
    botondevolver[i].addEventListener("click", () =>{
    var elem8=document.getElementById('primerscreen');
    elem8.style.display = "block";
    var elem9=document.getElementById('screenpostres');
    elem9.style.display = "none";
    var elem6=document.getElementById('seccionbebidas');
    elem6.style.display = "none";
    var elem7 =document.getElementById('platosfuertes');
    elem7.style.display = "none";
    var elem10=document.getElementById('datos');
    elem10.style.display = "none";
    var elem11 =document.getElementById('form');
    elem11.style.display = "none";

    })
}
function pagotarjeta(){
    var elem20=document.getElementById('ultimoscreen');
    elem20.style.display = "block";
    var elem21=document.getElementById('datos');
    elem21.style.display = "none";
    var elem22 =document.getElementById('form');
    elem22.style.display = "none";
    var elem23 =document.getElementById('primerscreen');
    elem23.style.display = "none";
   }
   document.getElementById('boton5').onclick = function (){
       pagotarjeta();
}
















