const cardArray = [
  {
    name: 'frog',
    img: './imgs/frog.jpg'
  },
  {
    name: 'frog',
    img: './imgs/frog.jpg'
  }
]

const grid = document.querySelector('.grid')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBorad() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', '../imgs/capas.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipcard)
    grid.appendChild(card)
  }
}


//check for metches
function checkForMatch() {

}


//flip card
function flipcard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)

  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}


createBorad()