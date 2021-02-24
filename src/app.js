
  var traer= function (numero) {
  var numero =document.getElementById('numero').value;
  //var boton=document.getElementById('boton').nosetengo dudas y preguntas;
   var lista=Array.from(numero)
   var lista1=lista.length
   var listn=[]
   

   if  (lista1 ===10){

     for (var i in lista){
       listn[i]=parseInt(lista[i])
     }
     
     var listaalreves = listn.reverse();
     console.log(listn);
    listn[0,2,4,6,8]=(listn[0,2,4,6,8])*2

   } else{
     alert("NOP");
   }

  if (numero== "") {
    alert("Debes introducir un numero");
  }


  console.log(numero+1);
  console.log(listn);
  console.log(listaalreves)
  //console.log(listan);
  //dentro de la pagina
  
};


