
function calc(){

//let x = parseInt(prompt("Please Enter first number"))
//let y = parseInt(prompt("Please Enter second number"))

let x = parseInt(document.getElementById("num1").value);
let y = parseInt(document.getElementById("num2").value);

let z = x/y;
let s = z.toFixed(3);

	
document.getElementById('no1').innerHTML = x ;
document.getElementById('no2').innerHTML = y ;

document.getElementById('sum').innerHTML = x+y ;
document.getElementById('sum').style.color = 'red' ;
document.getElementById('diff').innerHTML = x-y ;
document.getElementById('diff').style.color = 'red' ;
document.getElementById('mult').innerHTML = x*y ;
document.getElementById('mult').style.color = 'red' ;
document.getElementById('divi').innerHTML = s ;
document.getElementById('divi').style.color = 'red' ;

}