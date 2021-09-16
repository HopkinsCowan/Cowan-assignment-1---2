buttonadd = document.querySelector("add");
buttonmin = document.querySelector("minus");
buttmul = document.querySelector("mult");
buttondiv = document.querySelector("div");
button.addEventListener("click",add()) 
button.addEventListener("click",sub()) 
button.addEventListener("click",mul()) 
button.addEventListener("click",div()) 




function add(){
    var x = document.getElementById("fnum").value;
    var y = document.getElementById("snum").value;
    
    
    document.getElementById("answer").innerHTML = (parseFloat(x) + parseFloat(y));

 return;
 }
 


 
 function sub(){
 
      var x = document.getElementById("fnum").value;
    var y = document.getElementById("snum").value;
    
    
    document.getElementById("answer").innerHTML =(parseFloat(x) - parseFloat(y));
    
  return;
  }
 



 
 
  function mul(){
 
    var x = document.getElementById("fnum").value;
    var y = document.getElementById("snum").value;
    
    
    document.getElementById("answer").innerHTML =(parseFloat(x) * parseFloat(y));

    return;
  }




  function div(){
 
  var x = document.getElementById("fnum").value;
  var y = document.getElementById("snum").value;
  
  
  document.getElementById("answer").innerHTML =(parseFloat(x) / parseFloat(y));
  
  return;
  
  }
