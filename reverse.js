const input=require("readline-sync");
let rev = function (num){
    let reverse_num=''
    while (num>0){
        num1=num%10
        reverse_num=reverse_num+num1
        num=parseInt(num/10)
    }
    let num2=Number(reverse_num)
    console.log(`reverse number is => ${num2} ${typeof num2}`)
};
let num=input.questionInt("Enter the number: ")
rev(num)