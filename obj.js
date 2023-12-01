// singleton    (jab hum koi cheez constructor ("ye constructer bnane ka trika h" (object.creat)) se banate hein h to vo singleton hota 
// matla vo apne tarah ka ek hi object h) 
//constructor
//litral        (jab hum object ko litral ki tarah dicleat krain ge to singleton nahi banta) 
// object mein krys or values ka combination hota h 
// jese name : "danish" 
// sysytem by default name ko string ki trah yani "name" ki trah leta h lekin is ko istrah likhne ki zrorat nahi hoti
// object ki value mein ap koi bhi element de saktein h ---------------


// interview question----------ek symbol lo os ko object ki keys mein add karo or os ko print karo
const sym = Symbol("mykey1")
/* wrong method const Js _User = {
    sym : "mykey1"
} ------------or is ki type bi string h ---------------
}-------------shai trike mein return's a symbol ------------------------*/
const JsUser = {
    name : "danish",
    age  : 18,
    [sym] : "mykey1",
    email : "www@gmail.com",
    islogenin : false,
    lastlogedin : ["Monday", "wednesday","sunday"]

}
// kiso object ki valeue ko change karne ke liye 
// -------------------over right kiya jat h-------------------
JsUser.email = "wwe.com"
/*values ko lock karna take os ki value changs na ho*/
// -------------------------Object.freeze(JsUser)-------------------------------------
console.log(JsUser);
/* ad function in javascrip */
JsUser.greeting = function(){
    console.log("hello world")
}
console.log(JsUser.greeting)
/*------------------with reference-------------------*/
console.log(JsUser.greeting())
/*-----------------another method------------------*/

JsUser.greetingtwo = function(){
    console.log(`hello world, ${this.name}`)
}
console.log(JsUser.greetingtwo())
