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
 /*function pasar2(){
     var elem3=document.getElementById('segundoscreen');
     elem3.style.display = "block";
 }
 document.getElementById('boton1').onclick = function (){
    pasar2();
 }*/


