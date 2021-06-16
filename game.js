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

for (let i = 0; i < cardArray.length; i++) {
  let img = document.createElement('img')
  img.setAttribute('src', cardArray[i].img)

  grid.appendChild(img)

  img.addEventListener('click', clickFlip)
}

function clickFlip() {
  console.log('flip')
}
