
function validation(){
var phno=document.form1.phone.value;
var firstpassword=document.form1.psw.value;  
var secondpassword=document.form1.psw2.value; 
var email1=document.form1.email.value;
const re=/\S+@\S+\.\S+/g;
let result=re.test(email1);
if(result!=true){
    alert('Give valid email');
    return false;
}
const res = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
let result1=phno.match(res);
if(!result1){
    alert('give valid Phone number');
    return false;
}
if(firstpassword==secondpassword){  
  return true;  
}  
else{  
window.alert("password must be same!");  
 return false;  
}  
}
