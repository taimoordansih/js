function SayMyName () {

    console.log("d");
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
}
// SayMyName()
/* Function"name"(){} mein () ke data ko perameters boltien h
function ko exicute karne ke liye "name"() likhtein h is mein () ke ander data ko perameters boltein h
function key world h
name 
() function ka syntax h
or complete function ka defination h*/

/*--------------------------------------------------------------------------------------------------- */

function AddTwoNumbers (number1, number2){
    // console.log( number1+number2 )
    // const result = number1 + number2
    // return result
    return number1 + number2
}
// AddTwoNumbers(4,5)
const result = AddTwoNumbers(4,5)
console.log(result)

/*-----------------------------------------------------------------------------------------------------*/


/*ek user login howa h login hote hi hamein ek messege show karna h user ko.*/

function userLogIn (username){
    return `${username} just loged in`
}
// userLogIn("dnaish") yehan par function exicute tu hoga lekin print nahi hoga 
// console.log(userLogIn("danish"))

/*------------------------------------------------------------------------------------------*/
/*------------------user login messege with if else statment--------------------------*/
/*javascript mein ("") empty sting ko false mana jata ha 
or undefined ko bi flase mana jata h
is function mein jab hum usernam ki koi valur pass hi nahi karein ge to wo undefined hogi 
! sign true ko false or false ko ture mein convert kar deta h
isilye undefinded false or ! lgate hi wo true yani usernam defined nahi*/
function loginUserMessege (usernam){
    if(!usernam)/*(usernam === undefined)*/{
        console.log("o_ja_turja")
        /*return statement ke bad kuch bi exicute nahin hoga*/
        return
    }
    return `${usernam} just loged in`
}
/*jab loginUserMessege() argument defined nahi karte to wo undefined ata h*/
console.log(loginUserMessege("dnaish"))