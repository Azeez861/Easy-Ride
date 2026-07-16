    const form = document.getElementById("signupForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let password =
document.getElementById("password").value;

let confirm =
document.getElementById("confirmPassword").value;

let button = document.getElementById("button")

if(password!=confirm){
button.disabled=true

}

else{

button.disabled=false

}

});