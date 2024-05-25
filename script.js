n = 10 
var i= 1;
var num=' ';
document.write("Q1: Write Natural Number 1 to n");
while (i<=10){
    num+='<br>Natural Number: '+i;
    i++
}
document.write(num);
//...........................
document.write('<br>')
document.write("Q2: Write Natural Number 1 to n in reverse");
var num1=' ';
while (i>=1){
    num1+='<br>Natural Number: '+i;
    i--
}
document.write(num1);
document.write('<br>')
document.write("Q3: All alphabets from a to z");
document.write('<br>');
 var charCode= 97;
 var endAlph=122;
 while (charCode<=endAlph) {
    document.write(String.fromCharCode(charCode))
    charCode++
 };
 document.write('<br>')
document.write("Q4:Write 1 to 100 Even Number");
document.write('<br>');
var numStar= 2;
while(numStar<=100){
document.write(numStar)
if (numStar<100){
    document.write(", ")
}
numStar+=2;
};

document.write('<br>')
document.write("Q5: Write 1 to 100 odd Number");
document.write('<br>');
var numOdd= 1;
while(numOdd<=100){
document.write(numOdd)
if (numOdd<99){
    document.write(", ")
}
numOdd+=2;
};
document.write('<br>')
document.write("Q6: Write sum of natural Number n=10");
document.write('<br>');
function sum(n) {
var sum = 0;
    for (var j = 1; j<=n; j++){
        sum+=j;
    }
    return sum
}
var n =10;
var result = sum(n);
document.write(result)

