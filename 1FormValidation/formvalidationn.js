function validationFormExam()
{
    if(document.getElementById("uname").value=""){
        alert("Enter Username");
        document.myform.username.focus();
    }
    else if(validateUsername()){
        alert("Enter Valid name");
        document.myform.username.focus();
    }
    else if(document.getElementById("passw").value=""){
        alert("Enter your password");
        document.myform.password.focus();
    }
    else if(validatePassword()){
        alert("At least 1 uppercase character, At least 1 lowercase character, At least 1 digit, At least 1 special character, Minimum 8 characters");
        document.myform.password.focus();
    }  
    else if(document.getElementById("email").value==""){
        alert("Enter your Email ID");
        document.myform.emailID.focus();}

    else if(validateEmail()){
        alert("Enter valid Email ID!");
        document.myform.emailID.focus();
    }
    else if(document.getElementById("pNum").value==""){
        alert("Enter your Phone Number");
        document.myform.phoneNum.focus();
    }

    else if(validatePhoneNum()){
        alert("Enter valid Phone Number!");
        document.myform.phoneNum.focus();
    }
    else{
        validateUser();
    }
}

function validateUsername(){
    var string1 = document.getElementById("uname").value;
    if(string1.length >= 6 || string1.length <= 15 )
         return true;
    
    else 
        return false; 

}
   function validatePassword()
   {
            var str = document.getElementById("passw").value; 
            if (str.match(/[a-z]/g) && str.match(/[A-Z]/g) 
            && str.match(/[0-9]/g) && str.match(/[^a-zA-Z\d]/g) && str.length >= 8) 
                return false;
    
            else 
                return true;  
   }
   function validateEmail()  
    {
    var str = document.getElementById("email").value; 
            if (str.match(/@/g)  )
                return false;
    
            else 
                return true; 
    } 

function validatePhoneNum(){
    var str = document.getElementById("pNum").value; 
    if(str.match(/[0-9]/g))
        return false;
        else
        return true;

}
function validateUser(){
    var ressname = ["Pooja", "Shivani", "Vaishnavi"];
        urname = document.getElementById("uname").value;
        flag = 0;
        for(var i = 0; i<ressname.length; i++)
        {
            if (!urname.localeCompare(ressname[i])){
            alert("Username already exist, please give another one");
            flag = 0;
            break;
        }
        else
        {
            flag = 1;
        }
        }
            if (flag == 1){
            ressname.push(urname);
            alert("Registration is successful");
            document.myform.submit();
        } 
   }
 