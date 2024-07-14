// ==========    Abrir seletor de estilo   ========== 
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// ocultar o interruptor de estilo na rolagem
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
// ==========   Mudar tema de cores    ========== 
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}
// ==========   Tema modo claro e escuro    ========== 
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");    
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})