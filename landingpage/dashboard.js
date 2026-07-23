// Get saved user
const user = localStorage.getItem("easyRideUser");

// If nobody logged in
if (!user) {

    window.location.href = "login.html";

}

// Show user
document.getElementById("driverName").innerHTML = user;
document.getElementById("sidebarName").innerHTML = user;

driverName
document.getElementById("logoutBtn").addEventListener("click", function () {

    localStorage.removeItem("easyRideUser");

    window.location.href = "login.html";

});











const settingsBtn = document.getElementById("settingsBtn");
const settingsBox = document.getElementById("settingsBox");

settingsBtn.onclick = function(){

    if(settingsBox.style.display==="block"){

        settingsBox.style.display="none";

    }else{

        settingsBox.style.display="block";

    }

};

// Change Profile Picture

const uploadImage=document.getElementById("uploadImage");
const profileImage=document.getElementById("profileImage");

uploadImage.addEventListener("change",function(){

    if(this.files[0]){

        profileImage.src=URL.createObjectURL(this.files[0]);

    }

});
