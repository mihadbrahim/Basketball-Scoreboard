
let homeScore = 0
let guestScore = 0
function addScore(scoreElementId, pointsToAdd) {
    let scoreEl = document.getElementById(scoreElementId)

    if (scoreElementId === "score-home") {
        homeScore += pointsToAdd
        scoreEl.textContent = homeScore
    }
    else if (scoreElementId === "score-guest") {
        guestScore += pointsToAdd
        scoreEl.textContent = guestScore
    }

}

let startingMinutes = 60
let time = startingMinutes * 60

let countDownEl = document.getElementById("count-down")

setInterval(updateCountDown, 1000)
function updateCountDown() {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? "0" + seconds : seconds
    minutes = minutes < 10 ? "0" + minutes : minutes
    countDownEl.textContent = minutes + ":" + seconds
    time--
}
