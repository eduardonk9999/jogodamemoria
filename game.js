const cardArray = [
  {
    name: 'frog',
    img: 'frog.jpg',
  },
  {
    name: 'frog',
    img: 'frog.jpg',
  },
];

const grid = document.querySelector('.grid');

function clickFlip() {
  const imgData = this.dataset.ids;
  for (let j = 0; j < cardArray.length; j += 1) {
    if (j === Number(imgData)) {
      console.log('OK');
      this.setAttribute('src', `../imgs/${cardArray[j].img}`);
    } else {
      console.log('Nao ok');
    }
  }
}

for (let i = 0; i < cardArray.length; i += 1) {
  const img = document.createElement('img');
  img.setAttribute('src', '../imgs/capas.png');

  img.setAttribute('data-ids', i);
  grid.appendChild(img);
  img.addEventListener('click', clickFlip);
}
