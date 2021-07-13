const input=require('readline-sync')
let number=Number(input.question("Enter the perfect number: "))
let i=0
let sum=0
while (i<number){
    if (number%i===0){
        sum=sum+i
    }
    i++
}
console.log((sum===number)? `${number} is perfect number`:`${number} is not perfect number`)
