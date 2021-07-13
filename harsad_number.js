const input=require('readline-sync')
let number=Number(input.question("Enter the Harshad number: "))
let num1=0
let sum=0
let n=number
while (n>0){
    num1=n%10
    sum=sum+num1
    n=parseInt(n/10)
}
console.log((number%sum==0)? `${number} is harshad number`:`${number} is not harshad number`)