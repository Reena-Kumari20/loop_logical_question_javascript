const input=require('readline-sync')
let num=Number(input.question("Enter the number: "))
let i=1
let fc=1
while (i<=num){
    fc=fc*i
    i++
}
console.log(`factorial of ${num} =${fc}`)