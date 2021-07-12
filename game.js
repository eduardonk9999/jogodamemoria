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
    name: 'joan',
    img: 'joaninha.jpg',
  },
];

grid = document.querySelector('.grid');

function clickCard() {
  imgData = this.dataset.ids;
  metchCards(this)
  for (let j = 0; j < cardsArray.length; j += 1) {
    if (j === Number(imgData)) {
      this.setAttribute('src', `../imgs/${cardsArray[j].img}`);
    }
  }

 
}

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

let arrayUm = []
let arrayDois = []

let cartaVira = function(img) {
  setTimeout(function(){
    console.log('TCHAU')
    img.setAttribute('src', '../imgs/capas.png');
  }, 3000); 
 }

function metchCards(imgCardNew) {

  console.log(imgCardNew.name)

  arrayUm.push(imgCardNew.name)

  console.log(arrayUm)
  

  
 

/*

  Check for metches
  pegar o data ids, pegar o nome do data ids
  Ter dois arrays, cardsChosen e cardsChosenId

  dai pegamos esses valores que foram enviados para os arrays e mandamos para a função de metches

  na função pegamos todos os cardes atraves do querySelectorAll
  pegamos a posicao zero do primeiro array e a posicao 1 do segundo array, dai fazemos o if comparando as duas
  dai criamos um terceiro array mandando as cartes que deram match para esse 3º array

  se der false, executamos a funcao de virar as cartas de volta novamente.

*/

/*
if(Number(imgCardNew.dataset.ids) === Number(imgCardNew.dataset.ids)) {
  console.log('AQUI')
} else {
  setTimeout(function(){
    console.log('TCHAU')
  }, 1000); 
}

*/




}





