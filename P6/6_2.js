let text =
    '{"employees":[' +
    '{"firstName":"Aayush","lastName":"Parmar" },' +
    '{"firstName":"rishabh","lastName":"Parmar" },' +
    '{"firstName":"jack","lastName":"Jones" }]}';
let text2 ='{"firstName":"xyz","lastName":"abc","id":"21IT001","ResponseSubmitted":"True","Marks":"100"}';
const obj = JSON.parse(text2);
document.getElementById("demo").innerHTML =
"Name:"+obj.firstName + " " + obj.lastName+"<br>Summitted:"+obj.ResponseSubmitted+"<br>Marks Obtained :"+obj.Marks;