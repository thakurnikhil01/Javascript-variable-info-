//variable rules

// let 8a = 89     error

// let a8 = 89    

// let a8b = 99

// let @j = 77     error

// let j@ = 89     error

// let b#l = 66    error

// let true        error

// let _b = 22

// let b_ = 78

// let h_j = 9

// let second_class = "javaScript"

// let mySecondClass = 20

// console.log(second_class)

// console.log(mySecondClass)


// Arthmetics Operation

// Operator        Meaning         Example         Results 

//     +           ADD             8+2             10
//     -           SUB             8-2             6
//     *           MUL             9*6             54
//     /           DIV             10/5            2
//     %           MOD             5%2             1

// Data types in javaScript

// primitive data type                     reserved data type 

// 1. number                               1. Array
// 2. string                               2. Object
// 3. boolean                              3. function
// 4. undefined
// 5. null
// 6. symbol
// 7. bigInt

// 1. number(integer and float)

//     integer-> +ve , -ve , natural number , whole number (4, -4, 1 to ... , 0 to ...)

//     float -> decimal numbers (exp. 24.5)

//     2. string -> '', " ", ` `

//     exp . 

// let a = 'rahul'
// console.log(a)

// let b = 'jaiswal'
// console.log(b)

// let c = 'name'
// console.log(c)

// let str = "you're welcome"
// console.log(str) 

// let st = `hi
//             bye`
// console.log(st)

// let st = 'you have got ' + 4.5 + ' star out of 5'
// console.log(st)

// let str = 'you have got ' +1+1+1+ ' votes'
// console.log(str)

// let strr = 'you have got ' +(1+1+1)+ ' votes'
// console.log(strr)

// let a = '4'+'5'
// console.log(a) 

// let a = 45.67
// // let b = Math.round(a)
// console.log(Math.round(a))

// let b = 45.4
// console.log(Math.round(b))

// let c = 45.5
// console.log(Math.round(c))

// let d = 33.1
// console.log(Math.ceil(d))

// let e = 33.8
// console.log(Math.ceil(e))

// let a = 67.7 
// console.log(Math.floor(a))

// let b = 67.2
// console.log(Math.floor(b))

// let restro = 1*100 + 2*10 + 1*50
// console.log(restro)

// 79990
// 24990
// 18% GST

// let a = 79990
// let b = 2*24990
// let c = 'Iphone = ₹' +a
// let d = 'Airpods = ₹' +b
// let e = a + b
// let f = 'GST = ₹' + e/100*18
// console.log(c, d, f) 

// let bol = true
// console.log(bol)

// let boll = false
// console.log(boll)

// Assignment Operator

// Operator        Expression          Results 
//     =           x=y                 x = y                 
//     +=          x+=y                x = x+y 
//     -=          x-=y                x = x-y 
//     *=          x*=y                x = x*y 
//     /=          x/=y                x = x/y 

//     %=          x%=y                x = x%y 

// let x;
// console.log(x)

// console.log(typeof 34)

// console.log(typeof 'hi')

// console.log(typeof true)

// console.log(typeof undefined)

// console.log(typeof null)


// Reserved Data Type

// Array

// let arr = [1, 'Ducat', true, undefined, null, [1, 2, 3, 4, 5]]
// console.log(arr)

// console.log(arr.length)

// console.log(arr[5])

// Object - key value

// let person = {
//     name : 'Nikhil',
//     age : 22,
//     Phn : 9354253213,
//     address : 'Faridabad'
// }
// // console.log(person)

// // // Dot Notation
// console.log(person.age)
// console.log(person.name)

//Bracket Notation
// console.log(person['Phn'])
// console.log(person['address'])

//Function
//Create beverage vending machine


//Function Declaration
// function ServeBeverage(drink){
//     console.log(drink)
// }


// // Function Invocation
// ServeBeverage('Tea')
// ServeBeverage('Cold Coffee')
// ServeBeverage('Juice')

// Array Methods

// 1. Push and Pop

// let car = ['Urus', 'Swift', 'BMW', 'Audi']
// console.log(car)

// // Push Methods -> add the element at the last index
// car.push('Bolero')
// console.log(car)

// car.push('Ferrari')
// console.log(car)

// // Pop Methods -> remove the element from the last index
// car.pop('Bolero')
// console.log(car)

// car.pop('Ferrari')
// console.log(car)

// 2. Unshift and shift method

// let car = ['Urus', 'Swift', 'BMW', 'Audi']
// console.log(car)

// // Unshift
// car.unshift('Ferrari')
// console.log(car)

// car.unshift('Bolero')
// console.log(car)

// // Shift
// var removeEle = car.shift()
// console.log('Remove cars -> ' + removeEle)
// console.log(car)

// var removeEle2 = car.shift()
// console.log('Remove cars -> ' + removeEle2)
// console.log(car)

// let arr = [1, 2, 3, 4, 5]

// let square = []
// for(let i=0; i<arr.length; i++){
//     square.push(arr[i]*arr[i])
//     console.log(square)
// }

// Even Number

// let even = []
// let odd = []

// for(let i = 0; i<=25; i++){
//     if(i%2==0){
//         even.push(i)
//     }
//     else{
//         odd.push(i)
//     }
// }

// console.log('Even Numbers are -> ' + even)
// console.log('Odd Numbers are -> ' + odd)

// Function

// 1. Function as Expression

// let sayHi = function(){
//     // First class citizen
//     console.log('Nikhil say hi')
// }

// sayHi()

// // Traditional Function

// function sayHello(){
//     console.log('Nikhil say Hello')
// }

// sayHello()

// // Arrow function

// let sayByeArrow =()=>{
//     console.log('Say Bye')
// }

// sayByeArrow()

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 55, 78, 33, 178, 90, 43, 123, 124, 244, 150]
// let div2 = []
// let div5 = []
// let div10 = []
// let div15 = []
// let no = []

// // Find the number who is div by 2, 5, 10, 15

// for(let i=0; i<num.length; i++){
//     if(num[i]%2==0){
//         div2.push(num[i])
//     }

//     if(num[i]%5==0){
//         div5.push(num[i])
//     }

//     if(num[i]%10==0){
//         div10.push(num[i])
//     }

//     if(num[i]%15==0){
//         div15.push(num[i])
//     } 

//     if(num[i]%2!=0 && num[i]%5!=0 && num[i]%10!=0 && num[i]%15!=0){
//         no.push(num[i])
//     }
// }

// console.log('All numbers are -> ' + num)
// console.log('Div of 2 numbers are -> ' + div2)
// console.log('Div of 5 numbers are -> ' + div5)
// console.log('Div of 10 numbers are -> ' + div10)
// console.log('Div of 15 numbers are -> ' + div15)
// console.log('Numbers which are not divided by any number are -> ' + no)


let num = []
div2 = []
div5 = []
div6 = []
no = []

for(let i=0; i<1000; i++){
    if(i%2==0){
        div2.push(i)
    }

    if(i%5==0){
        div5.push(i)
    }

    if(i%6==0){
        div6.push(i)
    }

    if(i%2!=0 && i%5!=0 && i%6!=0){
        no.push(i)
    }
}

console.log('All numbers are 1 to 1000 ')
console.log('Div of 2 numbers are -> ' + div2)
console.log('Div of 5 numbers are -> ' + div5)
console.log('Div of 6 numbers are -> ' + div6)
console.log('Numbers which are not divided by any number are -> ' + no)

// let age = []
// age18 = []
// age50 = []
// age90 = []

// for(i=0; i<age.length; i++){
//     if(age[i]<=18){
//         age18.push(age[i])
//     }

//     else if(age[i]>18 && age[i]<=50){
//         age50.push(age[i])
//     }

//     else{
//         age90.push(age[i])
//     }
// }

// console.log('People within age 18 are -> ' + age18)
// console.log('People b/w age of 18 to 50 are -> ' + age50)
// console.log('People with age of more than 50 are -> ' + age90)
