const cards = [
  {
    name: 'frog',
    img: 'frog'
  },
]

let name = cards[0].name;
let img = cards[0].img;

let cardElement = `
  <div>
    <img src="imgs/${img}.jpg" data-img="01" alt="img">
  </div>

  <div>
    <img src="imgs/${img}.jpg" data-img="01" alt="img">
  </div>

  <div>
    <img src="imgs/${img}.jpg" data-img="02" alt="img">
  </div>

  <div>
    <img src="imgs/${img}.jpg" data-img="02" alt="img">
  </div>
`;



const body = document.querySelector('body')
body.innerHTML = cardElement


const arrayMatch = []


function comparaImagens() {
  const imgs = document.querySelectorAll('img')
  imgs.forEach(img => {
    img.addEventListener('click', () => {
      arrayMatch.push(img.dataset.img);
      console.log(typeof img.dataset.img)

      matchArray()
    })
  })



}


function matchArray() {
  if (arrayMatch[0] === arrayMatch[1]) {
    console.log('Cartas Iguais')
  } else {
    console.log('Cartas diferentes')
  }
}

comparaImagens()