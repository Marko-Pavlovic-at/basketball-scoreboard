let homePoints = 0;
let guestPoints = 0;

let homeDisplay = document.getElementById("homePoints-container")
let guestDisplay = document.getElementById("guestPoints-container")


function add1Home(){
    homePoints = homePoints +1;
    homeDisplay.textContent = homePoints;
}

function add2Home(){
    homePoints = homePoints +2;
    homeDisplay.textContent = homePoints;
}

function add3Home(){
    homePoints = homePoints +3;
    homeDisplay.textContent = homePoints;
}

function add1Guest(){
    guestPoints = guestPoints +1;
    guestDisplay.textContent = guestPoints;
}

function add2Guest(){
    guestPoints = guestPoints +2;
    guestDisplay.textContent = guestPoints;
}

function add3Guest(){
    guestPoints = guestPoints +3;
    guestDisplay.textContent = guestPoints;
}

function newGame(){
    homePoints = 0;
    guestPoints = 0;
    guestDisplay.textContent = guestPoints;
    homeDisplay.textContent = homePoints;
}