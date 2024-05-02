const coinContainer = document.getElementById("coin-container")
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
    coinContainer.style.animation = "coin-flip 1s forwards"
    document.body.classList.add("coin-flip")
    document.body.onanimationend = () => {
        document.body.classList.remove("coin-flip")
        coinContainer.style.animation = ""
    }
}

document.getElementById("coin-container").addEventListener("click", () => {
    function getRandCount() {
        var c = 0
        while (c == 0) {
            c = Math.round(Math.random()*10)
        }
        return c
    }
    for (let i = 0; i < getRandCount(); i++) {
        setTimeout(() => {
            flipCoin()
        }, i * 1000)
    }
})