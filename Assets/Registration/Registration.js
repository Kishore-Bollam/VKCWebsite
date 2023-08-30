

function validateUserName(){
if(document.getElementById("username").value.trim() == ""){
    document.getElementById("usernameErr").classList.remove("d-none");

}else if(document.getElementById("username").value.trim().length < 3 || document.getElementById("username").value.trim().length > 10 ){
    document.getElementById("usernameErr").classList.add("d-none");
    document.getElementById("usernameLengthErr").classList.remove("d-none");
}else{
    document.getElementById("usernameErr").classList.add("d-none");
    document.getElementById("usernameLengthErr").classList.add("d-none");


}
}
function validateEmail(){
    if(document.getElementById("email").value.trim() == ""){
        document.getElementById("emailErr").classList.remove("d-none");

    }else if(document.getElementById("email").value.trim().indexOf("@") == -1 || document.getElementById("email").value.trim().endsWith(".com") ==false &&
    document.getElementById("email").value.trim().endsWith(".in") == false && document.getElementById("email").value.trim().endsWith(".org") ==false) {
        document.getElementById("emailErr").classList.add("d-none");
        document.getElementById("emailFormatErr").classList.remove("d-none")
      
    }
    else{
        document.getElementById("emailErr").classList.add("d-none")
        document.getElementById("emailFormatErr").classList.add("d-none")
    
    }

}
function validatePassword(){
    document.getElementById("passwordErr").classList.add("d-none")
    document.getElementById("passwordLengthErr").classList.add("d-none");

    if(document.getElementById("password").value == ""){
        document.getElementById("passwordErr").classList.remove("d-none")

    }
    else if(document.getElementById("password").value.length < 8 ){
        document.getElementById("passwordLengthErr").classList.remove("d-none");

      


    }

}
function validatePasswordAndConfirmPasswordMatched(){
    document.getElementById("confirmPasswordErr").classList.add("d-none")

    if(document.getElementById("password").value != document.getElementById("confirmPassword").value ){
        document.getElementById("confirmPasswordErr").classList.remove("d-none")

    } 
}

function validateRegistrationform(){
    validateUserName();
    validateEmail();
    validatePassword();
    validatePasswordAndConfirmPasswordMatched();

}