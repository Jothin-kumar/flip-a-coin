window.side1 = document.getElementById("coin-head")
window.side2 = document.getElementById("coin-tail")

function flipCoin() {
    [window.side1, window.side2].forEach((side) => {
        if (side.classList.contains("coin-side-1")) {
            side.classList.remove("coin-side-1")
            side.classList.add("coin-side-2")
        }
        else if (side.classList.contains("coin-side-2")) {
            side.classList.remove("coin-side-2")
            side.classList.add("coin-side-1")
        }
    })
}

document.getElementById("coin-container").addEventListener("click", () => {
    flipCoin()
})