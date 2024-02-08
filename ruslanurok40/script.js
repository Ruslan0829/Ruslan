const header = document.querySelector("header")
console.log(header)

const btn = document.querySelector(".hero__btn")
console.log(btn)

btn.addEventListener("click", () => {
    btn.classList.toggle("red")
})

const burger = document.querySelector(".burger")
const menu = document.querySelector(".header__box")

burger.addEventListener("click", () => {
    menu.classList.toggle("open")
})
