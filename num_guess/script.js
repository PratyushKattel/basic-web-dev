const input = document.querySelector('#guessinput')
const submit_btn = document.querySelector('#submit-btn')
const message = document.querySelector('#message')
const triesDisplay = document.querySelector('#tries')
const scoreDisplay = document.querySelector('#score')

let rand_num = Math.floor(Math.random() * 100) + 1
let triesleft = 10
let score = 100
let state = 1
let userGuess = null

function getinput() {
    userGuess = Number(input.value)
}

submit_btn.addEventListener('click', () => {
    checkstatus()
    if (state === 1) {
        getinput()
        compareinput()
        updatescore()
    }
})

function checkstatus() {
    if (state == 1) {
        begingame()
    } else {
        endgame()
    }
}

function begingame() {
    message.textContent = "Game running..."
}

function endgame() {
    message.textContent = "Game Over! The number was " + rand_num
}

function compareinput() {

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Enter number between 1 and 100"
        return
    }

    if (userGuess === rand_num) {
        message.textContent = "Correct! You won!"
        state = 0
        return
    }

    if (userGuess < rand_num) {
        message.textContent = "Too low!"
    } else {
        message.textContent = "Too high!"
    }

    triesleft--
}

function updatescore() {

    if (state === 0) return

    score -= 10

    triesDisplay.textContent = "Tries left: " + triesleft
    scoreDisplay.textContent = "Score: " + score

    if (triesleft <= 0) {
        state = 0
        endgame()
    }
}
