/**
 * ====================================================================
 *                  #Variables section
 * =====================================================================
 */
const cards = document.querySelectorAll('.card');
let totalClicks=0;
let clickedCard = document.getElementById('play-flips');
let hasFlippedCard = false;
let isBusy = false; 
let card1,card2; 
let countdown ;
let matchedCardsList = [];
let congratsOverlay = document.getElementById('winning-text');

/**
 * ====================================================================
 *                  #functions sections
 * =====================================================================
 */
function flipCard(){
    if(isBusy) return;
    if(this === card1) return;
    totalClicks++;
    clickedCard.innerText = totalClicks;
    this.classList.add('visible');
    if(!hasFlippedCard){
        hasFlippedCard=true;
        card1 = this;
        return;
    }
        hasFlippedCard=false;
        card2 = this;
        checkForCardMatch();
}
function checkForCardMatch(){
    if(card1.dataset.name === card2.dataset.name){
        disableCardMatch();
    }else{
        hideCards();
    }
}
function disableCardMatch(){
    //:: Congrats msg:...
    matchedCardsList.push(card1);
    matchedCardsList.push(card2);
    if (matchedCardsList.length == 16){
        console.log('Show Congratulations msg...');
        congratsOverlay.classList.add('visible');
        ready();
    }
    //:::...
    card1.removeEventListener('click',flipCard);
    card2.removeEventListener('click',flipCard);
    setTimeout(() => {
        card1.classList.add('same-deck');
        card2.classList.add('same-deck');
        resetBoardCase();
    }, 500);
}
function hideCards(){
    isBusy = true;
    setTimeout(() => {
        card1.classList.remove('visible');
        card2.classList.remove('visible'); 
        //isBusy = false;
        resetBoardCase();
        },1000);
}
function resetBoardCase(){
    hasFlippedCard = false;
    isBusy = false;
    card1 = null;
    card2 = null;
}
const shuffleCards = function () {
    cards.forEach(card =>{
        const randIndex = Math.floor(Math.random() * (16));
        card.style.order = randIndex;
       // console.log(randIndex);
    });
};
function startGame(cards){
    cards = cards;
    shuffleCards();
    totalClicks = 0;
    clickedCard.innerText = totalClicks;
    resetBoardCase();
}
function ready() {
    shuffleCards();
    let players = Array.from(document.getElementsByClassName('start-play'));
   // const cards = document.querySelectorAll('.card');
   cards.forEach(card=>card.addEventListener('click',flipCard));
    players.forEach(play => {
        play.addEventListener('click', () => {
            play.classList.remove('visible');
            congratsOverlay.classList.remove('visible');
          cards.forEach(card=>{
            card.classList.remove('visible');
            card.classList.remove('same-deck');
            card.addEventListener('click',flipCard);
          });
            startGame(cards);
            console.log("The player, click play again!");
        });
    });
}
//loading proccess...
if (document.readyState === 'loading') {
    //load everything in the html or DOM first...
        document.addEventListener('DOMContentLoaded', ready())
    } else {
        ready();
    }