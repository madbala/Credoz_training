function submitcustom(option)
{
var a = document.getElementById("ip1").value;
var b = document.getElementById("ip2").value;
var choice = option;

if (isNaN(a) || isNaN(b)){
    document.getElementById("result").innerHTML= "Please enter the VALID NUMBERS"; 
}
else {
    switch(choice){
case "add":
    {     
    var c = Number(a) + Number(b);
    break;
    }
case "sub":
    {
    var c = Number(a) - Number(b);
    break;
    }
case "mul":
    {
    var c = Number(a) * Number(b);
    break;
    }
case "div":
    {
    var c = Number(a) / Number(b);
    break;
    }}
    document.getElementById("res").value= c;
    document.getElementById("result").innerHTML= c;
}}


var reset = function()
{
document.getElementById("ip1").value= "";
document.getElementById("ip2").value="";
document.getElementById("res").value="";
document.getElementById("result").innerHTML= "";
}
