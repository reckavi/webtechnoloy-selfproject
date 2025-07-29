const cardsArray = [
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    }
];

let flippedCards = [];
let matchedPairs = 0;
shuffleCards();
const gameBoard = document.getElementById('gameBoard')
displayCards();

function shuffleCards(){
    for(let i=cardsArray.length-1;i>=0;i--){
        const randIndex = Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randIndex]] = [cardsArray[randIndex],cardsArray[i]]
    }
}

function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');//finished cards kaga
        gameBoard.append(card); 
        card.addEventListener('click',flipCard);
    })
}

function flipCard(){//at a time flip 2 cards only
    if(flippedCards.length<2 && this.classList.contains('active')){//check the match that why we use if condn
        let cardId = this.getAttribute('id');//this represent current flipped card//grtatt for current flipped car's id
        flippedCards.push(this);
        this.classList.remove('cardback');//it for show the icon brc it remove that backcard 
        this.innerHTML = cardsArray[cardId].icon;// it is for show icon
        if(flippedCards.length==2){
            setTimeout(checkMatch,1000);//this is for we see the icon proper, bec, if setinterval is not avail, then the close immediately, we cant see properly
        }
    }
}

function checkMatch(){
    const card1Id = flippedCards[0].getAttribute('id');
    const card2Id = flippedCards[1].getAttribute('id');
    if(cardsArray[card1Id].name === cardsArray[card2Id].name){
        flippedCards[0].style.border = 'none';
        flippedCards[0].style.backgroundColor = 'whitesmoke';//body's bgcolor
        flippedCards[0].innerHTML = '';
        flippedCards[0].classList.remove('active');//this for not allow again click the vanished card to show icon
        flippedCards[1].classList.remove('active');// itha remove panna than vanish space click panna count la edukkathu 
        flippedCards[1].style.border = 'none';
        flippedCards[1].style.backgroundColor = 'whitesmoke';
        flippedCards[1].innerHTML = "";
        matchedPairs++;
        checkGameOver();
    }
    else{
        flippedCards[0].innerHTML = '';
        flippedCards[0].classList.add('cardback');
        flippedCards[1].innerHTML = '';
        flippedCards[1].classList.add('cardback');
    }
    flippedCards = [];//after check empty the flip array
}

function checkGameOver(){
    if(matchedPairs == cardsArray.length/2){
        while(gameBoard.firstChild){// each child remove pannu
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML = 'You Won';
        gameBoard.classList.remove('game');//class game kku than ella style lum varum
        gameBoard.classList.add('won');
    }
}
