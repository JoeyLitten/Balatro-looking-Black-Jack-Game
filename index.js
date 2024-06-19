let crtBar = '#crt-bar'

function crtStartUp(){
    document.addEventListener("DOMContentLoaded", () => {
    let timeline = gsap.timeline({})
    timeline.to(crtBar, .2,{
        width: '100vw',
        height: '2px',
        background: '#ffffff'
    })
    timeline.to(crtBar, .2,{
        width: '100vw',
        height: '100vh',
        background: '#ffffff',
        ease: Power2.easeOut 
    })
    timeline.to(crtBar, 0,{
        display: 'none'
        
    })
    document.getElementById("overlay").classList.add("transparent");
    });
}



//************** Beginning of Black Jack Game***************************

let player = {
    name: "Per",
    chips: 200
}
let flavorTextArr = ["Voucher me.", "Now with Raytracing!", "Stop staring at me.", "I'm THE Scarab Lord!", "This is Argentina.... nice.", "Jobs Done!", "I am eternal (a turtle)!","Made in West Park","You're now listening to 105.5 The Goo", "The plan is simple!",
    "For Lieutenent Dan", "Thats about it... see ya.", "As soon as he tries to back boost me, the double", "James...... earn this.", "Something need doing?","I'm using tilt controls!", "I WAS HERE", "Why did you break it?", "Yes, it's literally just black jack",
     "For Frodo", "Oh my god, he just ran in", "Stick to the plan, chums", "For democracy!", "Give orange me give eat orange me eat orange give me eat orange give me you.","Where's Illidan?!", "For Dimo", "Bonk em up", "Don't make a sound"
]
let deck = ["A",1,2,3,4,5,6,7,8,9,10,"J","Q","K"]
let cards = []
let hand = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let playBtn = document.getElementById("play-btn")
let flavorText = document.getElementById("flavor-text")
const animated = document.getElementById("crt-bar")
const startScreen = document.getElementById("start-screen")
const gameBoard = document.getElementById("game-board")



//playerEl.textContent = player.name + ": $" + player.chips
playBtn.textContent = "START GAME"
renderFlavorText()
crtStartUp()
animated.addEventListener('animationend', () => {
    console.log('Animation ended');
    document.getElementById("overlay").classList.add("transparent");
  });
/* function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
} */
function getRandomCardFromDeck(){
    let random =  Math.floor(Math.random() * deck.length)
    
 if(deck.random === "J" || deck.random === "Q" || deck.random === "K"){
    return 10
}else if ( deck.random  == "A"){
    return 1
}else{
    return deck[random]
}   
}

function renderFlavorText(){
    let random = Math.floor(Math.random() * flavorTextArr.length)
    flavorText.textContent = flavorTextArr[random]
}

/* function turnFacesToNumbers(){
    for( let i = 0; i < cards.length; i++){
    if(i == "J" || i == "Q" || i == "K"){
        return 10
    }else if ( i == "A"){
        return 11
    }else{
        return i
    } 
    }
}  */

function startGame() {
    isAlive = true
    let firstCard = getRandomCardFromDeck()
    let secondCard = getRandomCardFromDeck()
    cards = [firstCard, secondCard]   
    sum = firstCard + secondCard
    //renderGame()
    moveAfterStartButton()
    //dispellPlayButton()
}

function renderGame() {
    cardsEl.textContent = "Hand: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        //castPlayButton()
    } else {
        message = "You're out of the game!"
        isAlive = false
       // castPlayButton()
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCardFromDeck()
        cards.push(card)
        sum += card
        renderGame() 
    }
}

/* function castPlayButton(){
    document.getElementById("play-btn").style.display = ""
}

function dispellPlayButton(){
    document.getElementById("play-btn").style.display = "none"
} */


function moveAfterStartButton(){
    document.getElementById('move-up').classList.add('up');
    document.getElementById('move-down').classList.add('down');
    const startGameAnimation = document.getElementById("move-up");
    startGameAnimation.addEventListener("animationend", removeStartScreen)
    document.getElementById("start-screen").style.width = "0%"
    setTimeout(flexGameBoard, 600)
    setTimeout(makeRowsMove, 650)
    //document.getElementById("start-screen").style.display = "none !important"
    
}

function flexGameBoard(){
    document.getElementById("game-board").style.display = "flex";
    
}
function makeRowsMove(){
    document.getElementById("opponent-row-wrapper").classList.add("go-down")
    document.getElementById("player-row-wrapper").classList.add("go-up")
}

function removeStartScreen(){
    startScreen.remove()
    gameBoard.classList.add("display-flex");
    console.log("ayo it friggen worked")
}