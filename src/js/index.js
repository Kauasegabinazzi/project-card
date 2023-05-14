const themebutton = document.getElementById("themeButton");

const body = document.querySelector("body");

const imageTheme = document.querySelector(".theme");

themebutton.addEventListener("click", () => {

    const trueorfalseTheme = body.classList.contains("darkMod");

    body.classList.toggle("darkMod");

    if (trueorfalseTheme) {
        
        imageTheme.setAttribute("src", "./src/imagens/sun.png");
    }
    else {
        imageTheme.setAttribute("src", "./src/imagens/moon.png");
    }
})