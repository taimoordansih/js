/*E Comrace webistes item ko plus karne ke lite*/
/*--------------Rest and Spread opprators----------------------*/
function claculateCartPrice (...num1){
    return num1
}
console.log(claculateCartPrice(200,400,600))

                    /*////////////////////////////////////////////////////*/

function claculateCartPrice2 (val1 ,val2, ...num1){
    return num1
}
console.log(claculateCartPrice2(200, 400, 600, 20000))

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const user = {
    username : "dnaish",
    email : "wwe.com"
}
function HandleObject (anyObject){
    console.log(`user name is ${anyObject.username}, . Email edress is ${anyObject.email}`)
}
HandleObject(user)

/*....................................................................................................*/
/******************************also write object in function exicution**********************************/

function HandleObject2 (anyobject2){
    console.log(`username is ${anyobject2.username2}, and User email is ${anyobject2.email2}`)
}
HandleObject2({
    username2 : "taimoor",
    email2 : "wwew@gmail.com"
})