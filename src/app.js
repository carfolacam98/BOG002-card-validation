
  var traer= function () {
  var numero =document.getElementById('numero').value;
  //var boton=document.getElementById('boton').nosetengo dudas y preguntas;
   var lista=Array.from(numero)
   var lista1=lista.length
   var listn=[]
   var n1=0
   
   var n3=""
   

   if  (lista1 ===10){

     for (var i in lista){
       listn[i]=parseInt(lista[i])
     }
     
     var listaalreves = listn.reverse();
     
     
     for (var i in listn){
       if (i%2==0){
         listn[i]=2*listn[i]}

       if (listn[i]>9){
          var n1=listn[i]%10
          var n3= parseInt(listn[i]/10)
          listn[i]= n3+ n1
      }
      }
      }
       
    else{
     alert("NOP");
   }

  if (numero== "") {
    alert("Debes introducir un numero");
  }


  //console.log(numero+1);
  
  console.log(lista)
  console.log(listn);
  console.log(n1);
  
  console.log(n3);
  //console.log(listan);
  //dentro de la pagina
  
};


