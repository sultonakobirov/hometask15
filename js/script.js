//task1
function helloWolrd(){
    setTimeout(()=>{console.log("Hello World!")
},5000);
}
helloWolrd()

//task1.2
let arrayOne = [true, 123, "error"]
function functionShow(array) {
    console.log(`First element: ${array[0]}, Length of array: ${array.length}`);
}
functionShow(arrayOne)

//task2
let mult = (a, b) => {
    return a * b
}

setTimeout(() =>{
    console.log(mult(5, 10))
}, 1000)
mult()

//task3
array = [1, 6, -5, -5, 100,-50, "dfd", true]

function sumPositiveNegative(array) {
    let sumPositive = 0
    let sumnegative = 0
    array = array.filter(element => typeof element === "number")
    arrayPositive = array.filter(element => element >= 0)
    arrayNegative = array.filter(elem => elem < 0)
    arrayPositive= arrayPositive.map((i) => sumPositive += i)[arrayPositive.length -1]
    arrayNegative = arrayNegative.map((item) => sumnegative += item)[arrayNegative.length - 1]
    console.log(`Positive ${arrayPositive}`);
    console.log(`Negative: ${arrayNegative}`);
}
let resultTask3 = sumPositiveNegative(array)


//task4
const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
}

function sumOfObject(object) {
    let sum = 0
    numberArray = Object.values(object)
    numberArray = numberArray.filter(element => typeof element === "number")
    numberArray = numberArray.map((item) => sum+= item)[numberArray.length - 1]
    console.log(numberArray)
}
sumOfObject(objectWithNumbers)


//task5 
let a = 'first'
let b = 'second'
let changeValues = (a, b) => {
    b = [a, a = b][0];
    console.log(a, b);
}
changeValues(a, b)
