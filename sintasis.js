//Sumar dos numeros siempre cuando el primero sea mayor al segundo
class sintaxis{
   variables(){
    console.log("Sumar dos numeros siempre cuando el primero sea mayor al segundo")
    let num1=20
    let num2=10
    let suma=0
    if (num1>num2){
       suma=num1+num2 
       console.log(suma,"=",num1,"+",num2)
    }
   else{
    suma=num2+num1
    console.log("el primer numero no es mayor")
   }
    
   } 
   }
 //3) Presentar el mayor de dos numeros
    class Estructura{
mayordedosnumeros(){
    console.log("Presentar el mayor de dos numeros")
    let num1=10
    let num2=5
    if (num1>num2){
        console.log(num1,"es mayor que",num2)
    } 
    else{
        
        console.log(num2,"es mayor que",num1) 
    }
}
}
//2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo
class operador{
    calculadora(){
        console.log("Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo")
        let num1=20
        let num2=10
        let suma=0,multiplicacion=1,division=0,residuo=0
        suma=num1+num2
        multiplicacion=num1*num2
        division=20/10
        residuo=20%10
        console.log("la suma es",num1,"+",num2,"=",suma)
        console.log("la multiplicacion es",num1,"*",num2,"=",multiplicacion)
        console.log("la divición es",num1,"/",num2,"=",division)
        console.log("el residuo es",num1,"%",num2,"=",residuo)
        }
}
let operador1 = new operador()
operador1.calculadora()
let Estructura1 = new Estructura()
Estructura1.mayordedosnumeros()
let sintaxis1 = new sintaxis()
sintaxis1.variables()
//4) Dado un nombre presentarlo
class nombre{
    presentarnombre(){
        console.log(" Dado un nombre presentarlo")
      let  juan="pepe"
        console.log(juan)
    }
}
let nombre1 = new nombre()
nombre1.presentarnombre()
//5) Dado un valor de compra presentar el total considerando un 12% de iva
class total{
    totalde(){
        console.log("Dado un valor de compra presentar el total considerando un 12% de iva")
       let n1=50
       let iva=0.12
       let p=n1*iva
       let suma=p+n1
        console.log("el total es:",n1)
        console.log("el porcentaje de iva de la compra es:",p)
        console.log("total a pagar es:",suma)
    }
}
let total1 = new total()
total1.totalde()
//6) Presentar 5 veces un nombre
class name5{
    namede5(){
        console.log("Presentar 5 veces un nombre")
       let n=0
       let nam="jeanpur erre"
    while (n<5){
      console.log(nam)
      n=n+1
    }    

    }
}
let name51 = new name5()
name51.namede5()
//7) Presentar los numeros multiplos de 3 del 3 al 21
class mul3{
    multi3(){
        console.log("Presentar los numeros multiplos de 3 del 3 al 21")
        let n=1
  while (n<=21){
   if (n%3==0){
    console.log(n)
 }
n=n+1
  }
    }
}
let mul31 = new mul3()
mul31.multi3()
////8) Presentar los numeros multiplos de 3 del 21 al 3
class mul3in{
    multi3in(){
        console.log("Presentar los numeros multiplos de 3 del 21 al 3")
        let n=21
        while (n>=3){
         if (n%3==0){
          console.log(n)
       }
      n=n-1
        }   
    }
}
let mul3in1 = new mul3in()
mul3in1.multi3in()
//9) Dados dos nombres indicar si son iguales o diferentes
class nomigu{
    nomiguale(){
        console.log("Dados dos nombres indicar si son iguales o diferentes")
       let na1="el pepe"
       let na2="el pepe"
       if (na1=na2){
        console.log(na1,na2,"son nombres iguales")
    }
    else {
        console.log(na1,na2,"no son nombres iguales") 
        
    }
       }
    }
let nomigu1= new nomigu()
nomigu1.nomiguale()
//10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
class arreglo1{
    arreglo11(){
        console.log("Presenta Elementos De Un Arreglo Que Tengan Menos De 5 Caracteres")
        let arreglo=["435656","345434","12","123456","12","2","12","1","9","434355"]
        console.log("el arreglo es:",arreglo)
        for(let pos=0;pos<10;pos=pos+1){
            if (arreglo[pos].length < 5  ){ 
             console.log(`pos->${pos} Elemento:${arreglo[pos]}` )
            }
          }
    }
    
}
let arreglo111 = new arreglo1()
    arreglo111.arreglo11()
//11) Dado un arreglo presentar sus elementos
class arreglo2{
arreglo22(){
    console.log("Dado un arreglo presentar sus elementos")
    let num=[5,20,40,15,36]
    console.log(num)
}
}
let arreglo222 = new arreglo2()
arreglo222.arreglo22()
//12) Dado un arreglo de numeros presentar los menores a 10
class arreglo3{
    arreglo33(){
        console.log("Dado un arreglo de numeros presentar los menores a 10")
        let num=[5,4,40,8,36]
        let long= num.length,c=0
        console.log("el arreglo es:",num)
        while (c < long){
            if (num[c]<10){
                console.log(num[c],"es menor que 10")
            }
           c=c+1 
        }
    }
}
let arreglo333 = new arreglo3()
arreglo333.arreglo33()
//13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares
class arreglo4{
    arreglo44(){
        console.log("Dado un arreglo de numeros presentar los impares y al final la suma de los pares")
        let num=[5,4,40,8,36]
        let lon=num.length,c=0,suma=0
        console.log("el arreglo es:",num)
        while(c<lon){
            if (num[c] % 2 == 0){
                suma=suma+num[c]
                console.log("la suma de los pares es:",suma)
            }else{
           console.log(num[c],"es numero impar")
            }
            c=c+1
        }
    }
}
let arreglo444 = new arreglo4()
arreglo444.arreglo44()
//14) Presentar el primero el medio y el ultimo valor de un arreglo
class arreglo5{
    arreglo55(){
        console.log("Presentar el primero el medio y el ultimo valor de un arreglo")
        let num=[5,4,40,8,36]
        let central = num[(num.length-1) /2]
        let ultimo =num[num.length-1]
        console.log("el arreglo es:",num)
    console.log("el primer numero del arreglo es:",num[0])
    console.log("el numero medio del arreglo es:",central)
    console.log("el ultimo numero del arreglo es:",ultimo)
    }
}
let arreglo555 = new arreglo5()
arreglo555.arreglo55()
//15) Calcular el vuelto de un a compra dado el costo y el pago
class arreglo6{
    arreglo66(){
        console.log("15) Calcular el vuelto de un a compra dado el costo y el pago")
        let costo=25
        let pago = 30
        let vuelto=30-25
        console.log("el costo es:",costo)
        console.log("el pago es de:",pago)
        console.log("el vuelto es:",vuelto)
}
}
let arreglo666 = new arreglo6()
arreglo666.arreglo66()
//16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12
class tablam{
    tablam1(){
        console.log("Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
        console.log("la tabla del 5")
        let n=5
        let n1=1,mul=1
        while(n1<=12){
            mul=n*n1
            console.log(n,"*",n1,"=",mul)
            n1=n1+1
        }
        
    }
}
let tablam2 = new tablam()
tablam2.tablam1()
//17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
class sucesi{
    sucesi1(){
        console.log("17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas")
        let n1=5,n2=3
        let suma=0
		for(let i=0;i<n2;i=i+1){
            suma=n1+suma
            console.log(suma-n1,"+",n1,"=",suma)  
           }
        console.log("la multipliación de ",n1," * ",n2," es = ",suma)
    }
}
let sucesi2 = new sucesi()
sucesi2.sucesi1()
//18)Realizar la division de dos numeros por medio de restas sucesivas
class ressuce{
    ressuce1(){
        console.log("18)Realizar la division de dos numeros por medio de restas sucesivas")
        let n1=10,n2=2
        let c=0
         let res=n1
         while (res-n2>=0){
            res=res-n2
            console.log(res+n2,"-",n2,"=",res)
            c=c+1
         }
        console.log("la division entre:",n1,"/",n2,"=",c)
    }
}
let ressuce2 = new ressuce()
ressuce2.ressuce1()
//19)Calcular el factorial de un numero
class factorial{
    factorial1(){
        console.log("19)Calcular el factorial de un numero")
        let n=5
        let c=1,fac=1
        while(c<=n){
            fac=fac*c
            c=c+1
        }
        console.log("el factorial del numero 5 es:",fac)
    }
}
let factorial2 = new factorial()
factorial2.factorial1() 
//20)Calcular el exponente de un numero
class exponente{
    exponente1(){
        console.log("20)Calcular el exponente de un numero")
        let n=2,ex=3,po=1,c=0
       let elevado= Math.pow(n, ex);
        console.log("2"," ^",ex,"=",elevado)
    }
}
let exponente2 = new exponente()
exponente2.exponente1()
//21)Calcular la serie de fibonacci dado un numero
class fibonacci{
    fibonacci1(){
        console.log("21)Calcular la serie de fibonacci dado un numero")
        let a=0,b=1,c=1,cont=3,n=8
        while (cont < n){
            a=b;b=c;c = a+b
            console.log(c)
            cont=cont +1
        }
    }
}
let fibonacci2=new fibonacci()
fibonacci2.fibonacci1()
//22) Dado un numero invertirlo
class invertirlo{
    invertirlo1(){
         console.log("Dado un numero invertirlo")
         let num=321
         let ninvertido=0,d=0
         console.log(num)
         while (num != 0){
             d=num%10
             ninvertido=ninvertido*10+d
             num=Math.trunc(num/10)
          
           }
           console.log(ninvertido)
         }
 }
let invertirlo2= new invertirlo()
invertirlo2.invertirlo1()
//23) Presentar los divisores de un numero
class divisores{
    divisores1(){
        console.log("23) Presentar los divisores de un numero")
        let num=8,c=1
        for(c=1;c<=num;c++){
            if (num % c==0){
                console.log("los divisores son:",c)
            }
          
        }

    }

}
let divisores2 = new divisores()
divisores2.divisores1()
//24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los 
class perfecto{
    perfecto1(){
        console.log("24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los")
        let divisores=0,num=6,i=0,sumaperf=0
        for(i=1;i<num;i=i+1){
            if(num % i == 0){
                console.log(i)
                sumaperf=sumaperf+i
            }
        }
        console.log("")
        if(sumaperf==num){
            console.log(num,"Es un numero perfecto")
        }else{
            console.log(num,"Es un numero no perfecto")
        }
    }
    }
  let perfecto2 = new perfecto()
  perfecto2.perfecto1()  
  //25Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores)
  class primo{
    primo1(){
        console.log("25Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores")
        let num=7
        let cont=0,i=1
  for(i=1;i<=num;i++)
  {
     if(num % i==0)
     {
        cont=cont+1
     }
  }
  if(cont==2)
  {
     console.log(num," es primo")
  }
  else
  {
     console.log(num," no es primo")
  }
  }
  }

  let primo2 = new primo()
  primo2.primo1()
  
