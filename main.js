let dogScore = 0
let catScore = 0


let food = 1
let treats = 2
let walk = Number(-3)

drawScore()

function dogPoints(score, pointsValue) {
    dogScore = score + pointsValue;
    console.log(dogScore)
    drawScore()
}

function catPoints(score, pointsValue) {
    catScore = score + pointsValue;
    console.log(catScore)
    drawScore()
}
/*
function dogFood() {
    dogScore = dogScore + food
    console.log(dogScore)
    drawScore()
}

function dogTreats() {
    dogScore = dogScore + treats
    drawScore()
}

function dogWalk() {
    dogScore = dogScore + walk
    console.log(dogScore)
    drawScore()
}

function catFood() {
    catScore = catScore + food
    console.log(catScore)
    drawScore()
}

function catTreats() {
    catScore = catScore + treats
    drawScore()
}

function catWalk() {
    catScore = catScore + walk
    console.log(catScore)
    drawScore()
}
*/
function drawScore() {
    if (dogScore < 0 || catScore > 19) {
        window.alert('Cat Wins!')
        reset()
    }
    if (catScore < 0 || dogScore > 19) {
        window.alert('Dog Wins!')
        reset()
    }
    document.getElementById('dogScore').innerText = `${dogScore}`;
    document.getElementById('catScore').innerText = `${catScore}`;

}

function reset() {
    dogScore = 0;
    catScore = 0;
    drawScore()
}