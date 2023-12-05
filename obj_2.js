/*----------------constructor method for singleton-----------------------------------*/
/*----------------const tinderUser = new Object()---------------------------------------*/
const tinderUser = {}
tinderUser.Id = "123abc"
tinderUser.name = "danish"
tinderUser.islogedin = false

console.log(tinderUser)

/*------------object ke ander onjects----------------*/
const ragularUSer = {
    email : "www.com",
    fullname : {
        userfulname : {
            firstname : "taimoor",
            lastname : "danish",
        }
    }
}
console.log(ragularUSer)
console.log(ragularUSer.fullname.userfulname.firstname)


const obj1 = {a : "1", b : "2"}
const obj2 = {c : "3", d : "4"}
const obj3 = {obj1, obj2}
console.log(obj3)
const obj4 = Object.assign({}, obj1, obj2) 
console.log(obj4)


/*const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
*/
const obj5 = {...obj1, ...obj2}
console.log(obj5)



/*------------------------------------------------------------------------------------------------------*/
*/------------------------------------------array of objects----------------------------------------------*/





const users =  [
    {
        id : "123abc",
        email : "wwww.com"
    },
    {
        name : "danish",
        age : 18
    }
]
console.log(users[0].email);

console.log(Object.keys(tinderUser)); 

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

/*-----------------kya ye value object tmein h ke nai? ye pata karne ke liye-----------------------*/
console.log(tinderUser.hasOwnProperty("islogedin"));

console.log(tinderUser.hasOwnProperty("logedin"));

/*------------also check const object1 = {a : 1,b : 2}----------------------------------*/





