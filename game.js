const cardArray = [
  {
    name: 'frog',
    img: 'frog.jpg'
  },
  {
    name: 'frog',
    img: 'frog.jpg'
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
  let imgData = this.dataset.ids




  for (let j = 0; j < cardArray.length; j++) {
    if (j === Number(imgData)) {
      console.log('OK')
      this.setAttribute('src', `../imgs/${cardArray[j].img}`)

    } else {
      console.log('Nao ok')
    }
  }

}
