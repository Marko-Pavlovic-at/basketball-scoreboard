let homePoints = 0;
let guestPoints = 0;

let homeDisplay = document.getElementById("homePoints-container")
let guestDisplay = document.getElementById("guestPoints-container")


function add1Home(){
    homePoints = homePoints +1;
    homeDisplay.textContent = homePoints;
    leads()
}

function add2Home(){
    homePoints = homePoints +2;
    homeDisplay.textContent = homePoints;
    leads()
}

function add3Home(){
    homePoints = homePoints +3;
    homeDisplay.textContent = homePoints;
    leads()
}

function add1Guest(){
    guestPoints = guestPoints +1;
    guestDisplay.textContent = guestPoints;
    leads()
}

function add2Guest(){
    guestPoints = guestPoints +2;
    guestDisplay.textContent = guestPoints;
    leads()
}

function add3Guest(){
    guestPoints = guestPoints +3;
    guestDisplay.textContent = guestPoints;
        leads()

}

function newGame(){
    homePoints = 0;
    guestPoints = 0;
    guestDisplay.textContent = guestPoints;
    homeDisplay.textContent = homePoints;
}

function leads(){
    if(homePoints === guestPoints){
        homeDisplay.style.color = "red";
        guestDisplay.style.color = "red";
        
    }

    else if(homePoints > guestPoints){
        homeDisplay.style.color = "green";
        guestDisplay.style.color = "red";
    }
    else if(guestPoints > homePoints){
        guestDisplay.style.color = "green";
        homeDisplay.style.color = "red";
    }
}

leads();