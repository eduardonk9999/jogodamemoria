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


function createBorad() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', './imgs/')
  }
}

