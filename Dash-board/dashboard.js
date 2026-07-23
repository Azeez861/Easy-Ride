// Get saved user
const user = localStorage.getItem("easyRideUser");

// If not logged in
if (!user) {
    window.location.href = "/landingpage/login.html";
}

// Display name
document.getElementById("driverName").textContent = user;
document.getElementById("sidebarName").textContent = user;

// Logout
document.getElementById("logoutBtn").addEventListener("click", function () {

    localStorage.removeItem("easyRideUser");

    window.location.href = "/landingpage/login.html";

});






const mainContent = document.getElementById("mainContent");

const links = document.querySelectorAll(".menu-link");

function loadPage(page) {

    fetch(page)

        .then(response => response.text())

        .then(data => {

            mainContent.innerHTML = data;

        })

        .catch(() => {

            mainContent.innerHTML = `
                <div class="card">
                    <h2>Page Not Found</h2>
                    <p>The page could not be loaded.</p>
                </div>
            `;

        });

}

links.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

        loadPage(this.getAttribute("href"));

    });

});

loadPage("dashboard.html");





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
