// Immdiatly Invoked Function Expressions (IIFE)
// koi esa function jis ko immediatly execute karna ho
// Interview Q
// Esa function jo immiadatly execute ho jaye or
// kai bar global scope polution se problome hoti h tu global scope variables ya jo bhi declairation h
// us ki hatane ke liye
// function one () {
//     console.log(`hello world`)
// }
// one()
/*......................................................................................................*/

(function Two (){
    console.log(`O Ja Turja`)
})(); 
// Agar Ek IIFE function likha h or dosra function likho ge to wo execute nahi hoga kyu k IFFE function 
// ka starting point to de diya lekin koi ending point nahi end karne ke liye ; ka lagana zroori h

//  IFFE ko ek Arow Functin mein b likh saktein h
( () => {
    console.log(`My name is Taimoor Danish`)
} ) ();

// agar IFFE mein ek variable b hold karna ho

((name) =>{
    console.log(`My name is ${name}`)
})("dainsh")

//  Ek Named IFFE ko Function mein likhtein h 
//  Or unamed IFFE ko ArrowFunction Mein likhtein h
// 2 IFFE ko Ek sath likhne ke liye ; k istmal kartein h
 