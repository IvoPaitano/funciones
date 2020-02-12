//                   MATEMATICA SIMPLE


//       PUNTO 1

//   function tripler(n) {
//       var n = prompt("Ingrese numero:")
//       return console.log("El triple de "+n+ " es "+ n*3);
//   }

//  var numero
//  tripler(numero)


//       PUNTO 2

//  function multiply(n1,n2) {
//      var n1 = parseInt(prompt("Ingrese primer valor:"))
//      var n2 = parseInt(prompt("Ingrese segundo valor:"))

//      return console.log(n1*n2)   
//  }

// var numero1
// var numero2
// multiply(numero1,numero2)


//       PUNTO 3
//  function divide(n1,n2) {
//      var n1
//      var n2

//      var n1 = prompt("Ingrese primer numero:")
//      var n2 = prompt("Ingrese segundo numero:")

//      return console.log("El 1er numero dividio el 2do es:"+(n1/n2));
//  }

// var numero1
// var numero2

// divide(numero1,numero2)

//       PUNTO 4

// function reminder(parm1,parm2) {

//    var modulo = (parm1%parm2)
//    return console.log(parm1+" modulo "+parm2+":"+modulo);
   
// }

// var num1 = prompt("Ingrese primer numero:")
// var num2 = prompt("Ingrese primer numero:")

// reminder(num1,num2)


//       PUNTO 5

// var final
// var final= reminder(divide(multiply(tripler(5),12),12),3)

// Puede no funcionar debido a los prompts ya que pide 2 por cada funcion, no obstante 
// en var final se puede ver como se llama a una funcion dentro de otra.





//                   ESPAR

// function esPar(n) {
//     var n = prompt("Ingrese numero:")
//     if (n%2 == 0) {
//         return console.log("El numero "+n+ " es PAR.")
//     } else {
//         return console.log("El numero "+n+ " es IMPAR");
//     }    
// }
// var numero
// esPar(numero)





//                   CREAR FRASE

//  function crearFrase(frase1f,frase2f,frase3f) {

//      var final 

//      final = Math.ceil(Math.random()*3)
//     if (final == 1) {
//          return console.log(frase1f);
        
//      }else if(final == 2){
//         return console.log(frase2f);
        
//      }else{
//          return console.log(frase3f);
//      }
//  }

// var frase1 = prompt("Frase 1:")
// var frase2 = prompt("Frase 2:")
// var frase3 = prompt("Frase 3:")

// crearFrase(frase1,frase2,frase3)

//                      CONTARDEA_N

//  function contarDeA_n(contar_de_a,contar_hasta) {

//      var str = ""

//      while (contar_de_a <= contar_hasta){
//          str = str + contar_de_a.toString()
//          if (contar_de_a < contar_hasta) {
//              str += ","
//          }else{}
//          contar_de_a = contar_de_a + 2
//      }
//      return console.log(str)
//  }

 
//  var a = parseInt(prompt("Contar desde:"))
//  var b = parseInt(prompt("Contar hasta:"))

//  contarDeA_n(a,b)

//                      FIZZBUZZ2:LA VENGANZA DE FIZZ BUZZ

//  function fizzbuzz2(str1,str2,fizznum,buzznum,contar_hasta) {

//      var contador = 1
//      var strf = ""
     
//      while (contador <= contar_hasta) {
//          if (contador % fizznum == 0 && contador %buzznum == 0){
//              strf = strf+(str1 +" y "+ str2)
//          }else if (contador % fizznum == 0){
//              strf = strf + str1
//          }else if (contador % buzznum == 0) {
//              strf = strf + str2
//          }else{
//              strf = strf + contador.toString()
//          }
//          if (contador != contar_hasta) {
//              strf = strf + ","
//          }
//          contador++
//      }
//      return console.log(strf)
    
//  }

// var str1f = prompt("Ingrese primer palabra")
// var str2f = prompt("Ingrese segunda palabra")

// var fizznumf = prompt ("¿Multiplos de :?")
// var buzznumf = prompt ("¿Y tambien multiplos de :?")

// var contar_hastaf = prompt ("¿Hasta que numero quiere contar?")

// fizzbuzz2(str1f,str2f,fizznumf,buzznumf,contar_hastaf)

//                      FACTORIAL

// function factorial(numf) {

//     var res = 1

//     while (numf != 0) {
//         if (numf < 0) {
//             var numf = prompt("No numeros negativos!!!\nReeingrese:")
//         }
//         else if(numf == 0) {
//             return console.log(res)
            
//         } else {
//             res = res *  numf
//         numf--
//         }
//     }
//     return console.log(res)
    
// }

// var num = prompt("¿Factorial de N:?")
// factorial(num)

//                      FIBONACCI

// resultado = 0
// restultado2 = resultado
// function fibonacci(numf) {
//    while (cont < numf) {
       
//     resultado = resultado + cont
//     cont++
//    }
// }


// var num = prompt("Serie de fibonacci de N:")
// fibonacci(num)