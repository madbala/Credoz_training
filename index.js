var dotes,ans,x,tex="";

function doview(temp)
{debugger;
  tex +=temp;  
 document.getElementById("ip1").value=tex;   
}

function doCalculate()
{debugger;
x=document.getElementById("ip1").value;
try{
ans = eval(x);
return document.getElementById("ip1").value =ans;
}
catch(err)
{
return document.getElementById("ip1").value="INVALID CALCULATION";
}
}
function doclear()
{
    document.getElementById("ip1").value="";
    tex="";
}
