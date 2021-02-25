
  var traer= function () {
  var numero =document.getElementById('numero').value;
  //var boton=document.getElementById('boton').nosetengo dudas y preguntas;
   var lista=Array.from(numero)
   var listn=[]
   var n1=0
   var n3=0
   var suma=0
   var sumafor=0
  
   
   


   

   
   if  (lista.length ===15 || lista.length === 16){
     
    var ultimos4=numero.slice(-4);
    var simbolo="#";
    var tarjetaoculta=simbolo.repeat(numero.length-4)+ultimos4;

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
      sumafor=sumafor+listn[i]
      }
       if(sumafor%10==0){
         alert("su tarjeta es valida")
       }
       else{alert("su tarjeta es invalida")}
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
  console.log(suma)
  console.log(sumafor)
  
  
  console.log(typeof numero)
  console.log(ultimos4)
  console.log(tarjetaoculta)
  //console.log(listan);
  //dentro de la pagina
  
};


