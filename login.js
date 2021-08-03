function validation(){ 
    var password1=document.form1.password.value; 
    var email1=document.form1.email.value;
    const re=/\S+@\S+\.\S+/g;
    let result=re.test(email1);
    if(result!=true){
        alert('Give valid email');
        return false;
    }
    var passw=/^[A-Za-z]\w{7,14}$/;
    if(password1.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  
        }  
        
    }
    


