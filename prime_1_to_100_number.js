//////////////  in while loop//////////////////////////////////////////

const input=require('readline-sync')
let number=Number(input.question("Enter the perfect number: "))
let i=1
while (i<=number){
    let j=1
    let c=0
    while (j<=i){
        if (i%j===0){
            c=c+1
        }
        j++
    }
    console.log((c===2)? `${i} is prime number`:`${i} is not prime number`)
    i++
}




////////////// in for loop //////////////////////////////////////////////////

const input=require('readline-sync')
let num=Number(input.question("Enter the perfect number: "))
for (let k= 1;k<=num;k++){
    c=0
    for (let x=1;x<=k;x++){
        if (k%x===0){
            c=c+1
        }
    }
    console.log((c===2)? `${k} is prime number`:`${k} is not prime number`)
}