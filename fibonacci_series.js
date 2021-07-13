const input=require('readline-sync')
let num=Number(input.question("Enter the number: "))
let x=0
let y=1
let z=0
while (z<=num){
    console.log(z)
    x=y
    y=z
    z=x+y
}