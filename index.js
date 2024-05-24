let player = {
    name: "Per",
    chips: 200
}
let flavorTextArr = ["Voucher me.", "Now with Raytracing!", "Stop staring at me.", "I'm THE Scarab Lord!", "This is Argentina.... nice.", "Jobs Done!", "I am eternal (a turtle)!",""]
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

playerEl.textContent = player.name + ": $" + player.chips
playBtn.textContent = "START GAME"
renderFlavorText()

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
    console.log(flavorTextArr[random])
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
    renderGame()
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