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
    var elem4=document.getElementById('registrodedatos');
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
function pasar5(){
    var elem6=document.getElementById('ultimoscreen');
    elem6.style.display = "block";
    var elem7 =document.getElementById('primerscreen');
    elem7.style.display = "none";
    var elem8 =document.getElementById('registrodedatos');
    elem8.style.display = "none";
    

   }
   document.getElementById('boton5').onclick = function (){
       pasar5();
}
 
 /*function pasar2(){
     var elem3=document.getElementById('segundoscreen');
     elem3.style.display = "block";
 }
 document.getElementById('boton1').onclick = function (){
    pasar2();
 }*/


