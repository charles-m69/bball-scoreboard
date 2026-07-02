let scoreHome = 0
let scoreGuest = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let leadTitle = document.getElementById("lead-title")


function getLead() {
    let homeLead = document.getElementById("home-onlead")
    let guestLead = document.getElementById("guest-onlead")
    if(scoreHome > scoreGuest) {
        homeLead.textContent = "X"
        guestLead.textContent = ""
        leadTitle.textContent = "LEADING TEAM"
    } else if (scoreGuest > scoreHome) {
        guestLead.textContent = "X"
        homeLead.textContent = ""
        leadTitle.textContent = "LEADING TEAM"
    } else if (scoreHome == 0 && scoreGuest == 0) {
        guestLead.textContent = ""
        homeLead.textContent = ""
    } else {
        leadTitle.textContent = "TIE"
        guestLead.textContent = "X"
        homeLead.textContent = "X"
        console.log("Tie")
    }
}

function homeAddOne() {
    scoreHome += 1
    homeScore.textContent = scoreHome
    getLead()
}

function homeAddTwo() {
    scoreHome += 2
    homeScore.textContent = scoreHome
    getLead()
}

function homeAddThree() {
    scoreHome += 3
    homeScore.textContent = scoreHome
    getLead()
}

function guestAddOne() {
    scoreGuest += 1
    guestScore.textContent = scoreGuest
    getLead()
}

function guestAddTwo() {
    scoreGuest += 2
    guestScore.textContent = scoreGuest
    getLead()
}

function guestAddThree() {
    scoreGuest += 3
    guestScore.textContent = scoreGuest
    getLead()
}

function newGame() {
    scoreHome = 0
    scoreGuest = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
    getLead()
}

console.log(scoreHome)