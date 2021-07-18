class GameM {
  constructor(){
    cardsArray.this = cardsArray
    grid.this = grid
    imgData.this = imgData
    imgCard.this = imgCard
    imgCardNew.this = imgCardNew
    nameImgJoaninha.this = nameImgJoaninha
    nameImgSapo.this = nameImgSapo
  }
}

cardsArray = [
  {
    name: 'frog',
    img: 'frog.jpg',
  },
  {
    name: 'frog',
    img: 'frog.jpg',
  },
  {
    name: 'joan',
    img: 'joaninha.jpg',
  },
  {
    name: 'joan',
    img: 'joaninha.jpg',
  },
];

cardsArray.sort(() => 0.5 - Math.random())

grid = document.querySelector('.grid');



function MontaCard() {
  for (let i = 0; i < cardsArray.length; i += 1) {
    imgCard = document.createElement('img');
    imgCard.setAttribute('src', '../imgs/capas.png');
    imgCard.setAttribute('name', `${cardsArray[i].name}`);
    imgCard.setAttribute('data-ids', i);
    grid.appendChild(imgCard);
    imgCard.addEventListener('click', clickCard);
  }
}
MontaCard()

/*
function duplicaCard(){
  const cards = document.querySelectorAll(".grid img")
  const grid = document.querySelector(".grid")
  cards.forEach(card => {
    let duplica = card.cloneNode()
    grid.appendChild(duplica)

    duplica.addEventListener('click', clickCard);

  })

}
duplicaCard()
*/

let arrayUm = []
let cardsChosen = []
let cardsIDs = []

function metchCards() {
  let cards = document.querySelectorAll('img')
  const optionOne = cardsIDs[0]
  const optionTwo = cardsIDs[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOne].classList.add('acerto')
    cards[optionTwo].classList.add('acerto')
  } else {
    cards[optionOne].setAttribute('src', '../imgs/capas.png');
    cards[optionTwo].setAttribute('src', '../imgs/capas.png');
  }
  cardsChosen = []
  cardsIDs = []
  arrayUm = []
}



function flipCard(card) {
  let cardID = card.getAttribute('data-ids');
  arrayUm.push(cardID)
  cardsChosen.push(cardsArray[cardID].name)
  cardsIDs.push(cardID)
  if(arrayUm.length === 2) {
    setTimeout(metchCards, 1000)
  } 
}



function clickCard() {
  imgData = this.dataset.ids;
  for (let j = 0; j < cardsArray.length; j += 1) {
    if (j === Number(imgData)) {
      this.setAttribute('src', `../imgs/${cardsArray[j].img}`);
      flipCard(this)
    }
  }
}