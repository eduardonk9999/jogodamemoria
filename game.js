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
  img.setAttribute('src', '../imgs/capas.png')
  //cardArray[i].img

  img.setAttribute('data-ids', i)

  grid.appendChild(img)

  img.addEventListener('click', clickFlip)
}

function clickFlip() {
  console.log('flip')

  let imgData = document.querySelectorAll('img');
  console.log(imgData.dataset.ids)
}
