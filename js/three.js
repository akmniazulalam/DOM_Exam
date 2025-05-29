let green = document.getElementById("green")
let red = document.getElementById("red")
let blue = document.getElementById("blue")

green.addEventListener("click", () => {
    document.body.style.background = "oklch(72.3% 0.219 149.579)"
})

red.addEventListener("click", () => {
    document.body.style.background = "oklch(63.7% 0.237 25.331)"
})
blue.addEventListener("click", () => {
    document.body.style.background = "oklch(62.3% 0.214 259.815)"
})