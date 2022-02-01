const menu = document.getElementById("mobile-menu")
const close = document.getElementById("close")
const nav = document.querySelector(".list")

menu.addEventListener("click", () => {
    nav.classList.add("open-nav")
})
close.addEventListener("click", () => {
    nav.classList.remove("open-nav")
})