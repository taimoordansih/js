/*"This" function agar {} ke andar hoga to wo {} ke ader wali value ko refer kare ga
Lekin agar bahar node enviroment mein "this" function type karein ge to khali object {} output hoga
lekin browser mein global enviroment window hota h waha par kafi function atey h*/
const user = {
    username : "danish",
    price : 999,

    welcomeMessege : function (Messege){
        return (`welcom ${Messege} to our website`)
    }
}
console.log(user.welcomeMessege("ramish"))
/*.......................................................................................................*/
user.username = ("ramish")
console.log(user.welcomeMessege())
/*.......................................................................................................*/
function usermessegs (name) {
   return (`o ja turja ${name}`)
}
console.log(usermessegs("ramish"))
/*......................................................................................................*/
// Arrow Function 
// () => {}
// Also hold Arrow Function in a Variable / Basic ArrowFunction
//counst myArrowFunction = () => {}
const AddTowNumber = (Num1, Num2) => {
    return Num1 + Num2
}
console.log(AddTowNumber(3, 4)) 

// imlisit Return 
// implisit Return mein {} nahi hoti or return key world b nahi hota ye ek line ka statement hota h

const AddNum = (Num1, Num2) => Num1 + Num2
console.log(AddNum(5, 4))

// Ek or tarika h jis mein ArrowFunction mein () daltein hein agar () dala to return key world likhne 
// ki zaroorat nahi lekin agar {} dala to return key world likhna pare ga

const TwoNum = (Num1, Num2) => (Num1 + Num2)
console.log(TwoNum(5, 5))
// Agar ArrowFunction mein object pass karein to ose run karwane ke liye () ka istmal kartein h

const Abc = (Num1, Num2) => ({Username : "danish"})
console.log(Abc(3, 4))
