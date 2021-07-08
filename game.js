class GameM {
  constructor(){
    cardsArray.this = cardsArray
    grid.this = grid
    imgData.this = imgData
    imgCard.this = imgCard
    imgCardNew.this = imgCardNew
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

grid = document.querySelector('.grid');

function clickCard() {
  imgData = this.dataset.ids;
  for (let j = 0; j < cardsArray.length; j += 1) {
    if (j === Number(imgData)) {
      console.log('OK');
      this.setAttribute('src', `../imgs/${cardsArray[j].img}`);
      viraCardDevolta(this)
    } else {
      console.log('Nao ok');
    }
  }

 
}

function MontaCard() {
  for (let i = 0; i < cardsArray.length; i += 1) {
    imgCard = document.createElement('img');
    imgCard.setAttribute('src', '../imgs/capas.png');
  
    imgCard.setAttribute('data-ids', i);
    grid.appendChild(imgCard);
    imgCard.addEventListener('click', clickCard);
  }
}

MontaCard()

function viraCardDevolta(imgCardNew) {
// Preciso retornar apenas o nome da img,


/*
  if(imgCardNew.src === imgCardNew.src) {
    console.log('Foi')
  } else {
    console.log('Não foi')
  }
*/  

  /*
  setTimeout(function(){
    console.log()
  }, 3000); 
  */
}





