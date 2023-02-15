function func(){
    let a=parseFloat(prompt("Number 1:")); 
    let op=prompt("Operation: + - * / %"); 
    let b=parseFloat(prompt("Number 2:")); 
    if(op==='+') { 
        console.log(a+b); 
        document.getElementById("output").innerText=(a+b); 
    }
    else if(op==='-')  { 
        document.getElementById("output").innerText=(a-b); 
    } 
    else if(op==='/') { 
        document.getElementById("output").innerText=(a/b); 
    }
    else if(op==='*')  { 
        document.getElementById("output").innerText=(a*b); 
    } 
    else if(op==='%') { 
        document.getElementById("output").innerText=(a%b); 
    } 
    else { 
        alert("Operation not allowed"); 
    }
}