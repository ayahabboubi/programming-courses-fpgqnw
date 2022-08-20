//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let num1:number;
num1=parseInt(prompt("write a number between 1 and 3"));
while(num1<1 && num1>3){
  num1=parseInt(prompt("write a number between 1 and 3"));
}
console.log(num1);