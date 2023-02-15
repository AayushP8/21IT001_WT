function func(){ 
    let a=parseFloat(document.getElementById("n1").value); 
    let b=parseFloat(document.getElementById("n2").value); 
    let op=document.getElementById("oper").value; 
    if(op==='+') {
        document.getElementById("output").innerText=(a+b); 
     } 
     else if(op==='-') 
    { 
        document.getElementById("output").innerText=(a-b); 
    } 
    else if(op==='/') {
        document.getElementById("output").innerText=(a/b); 
    } 
    else if(op==='*') { 
        document.getElementById("output").innerText=(a*b); 
    }
    else if(op==='%') { 
        document.getElementById("output").innerText=(a%b); 
    } 
    else{ 
        alert("Operation not allowed"); 
    }
} 