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
const botonpasar = document.getElementById('boton1');
botonpasar.addEventListener('click',pasar1);
function pasar1(){
 var elem =document.getElementById("ultimoscreen");
 elem.style.display("block");
}