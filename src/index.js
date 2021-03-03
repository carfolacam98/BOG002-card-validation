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
 var elem=document.getElementById('ultimoscreen');
 elem.style.display = "block";
 var elem1 =document.getElementById('primerscreen');
 elem1.style.display = "none";
}
document.getElementById('boton1').onclick = function (){
    pasar1();
    
}
function pasar2(){
    var elem2=document.getElementById('ultimoscreen');
    elem2.style.display = "block";
    var elem3 =document.getElementById('primerscreen');
    elem3.style.display = "none";
   }
   document.getElementById('boton2').onclick = function (){
       pasar2();
}
function pasar3(){
    var elem4=document.getElementById('ultimoscreen');
    elem4.style.display = "block";
    var elem5 =document.getElementById('primerscreen');
    elem5.style.display = "none";
   }
   document.getElementById('boton3').onclick = function (){
       pasar3();
   }
 /*function pasar2(){
     var elem3=document.getElementById('segundoscreen');
     elem3.style.display = "block";
 }
 document.getElementById('boton1').onclick = function (){
    pasar2();
 }*/


