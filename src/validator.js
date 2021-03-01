const isValid= (numerodetarjeta)=> {
  var lista=Array.from(numerodetarjeta)
  var numero = numerodetarjeta
  var listn=[]
   var n1=0
   var n3=0
   var sumafor=0
  
   if  (lista.length ===15 || lista.length === 16){
     for (var i in listn){
      listn[i]=parseInt(lista[i])
       if (i%2==0){
         listn[i]=2*listn[i]}

       if (listn[i]>9){
          var n1=listn[i]%10
          var n3= parseInt(listn[i]/10)
          listn[i]= n3+ n1
      }
      sumafor+=listn[i]
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
  return sumafor
  }




const maskify= (numerodetarjeta)=>{
  var numero =numerodetarjeta
  if (numero.length== 15 || numero.length== 16){
    var ultimos4=numero.slice(-4);
    var simbolo="#";
    var tarjetaoculta=simbolo.repeat(numero.length-4)+ultimos4;

  return tarjetaoculta;
}
  else{
    var invalido ="ingrese mas numeros";
    return invalido

  }
}
const validator =  {
  isValid,
  maskify
  
};

export default validator;