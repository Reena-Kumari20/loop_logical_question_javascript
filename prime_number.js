const input=require('readline-sync')
let number=Number(input.question("Enter the perfect number: "))
let i=1
let count=0
while (i<=number){
    if (number%i===0){
        count=count+1
    }
    i++
}
console.log((count===2)? `${number} is prime number`:`${number} is not prime number`)
