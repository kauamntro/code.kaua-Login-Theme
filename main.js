const body = document.querySelector("body");
const button = document.getElementById("btn-theme");
const img = document.getElementById("img")

button.addEventListener("click", themeSelector);

function themeSelector () {
    const theme = document.querySelector(".dark")
    if(theme){
        body.classList.remove("dark");
        button.innerHTML = "<i class='fa fa-moon'></i>";
        img.setAttribute("src", "./assets/white.jpg");
    } else {
        body.classList.add("dark");
        button.innerHTML = "<i class='fa fa-sun'></i>";
        img.setAttribute("src", "./assets/dark.jpg");
    };
};