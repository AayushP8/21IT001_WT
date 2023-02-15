function convertTemp() { 
    var temp = document.getElementById("temp").value; 
    var conversionType = document.getElementById("conversion-type").value; 
    if (conversionType == "celsius-to-fahrenheit") { 
        var result = (temp * 9 / 5) + 32; 
    }
    else if (conversionType == "fahrenheit-to-celsius") { 
        var result = (temp - 32) * 5 / 9; 
    } 
    document.getElementById("result").innerHTML = result + " &deg;"; 
} 