let progress1 = ["To do", "In progress", "Stuck", "Done"];

let body = document.querySelector("body");
let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);


function modal() {
  let header =document.createElement('div');
  let title = document.createElement('div');
  let inpuT = document.createElement('input');
  let description = document.createElement('div');
  let status = document.createElement('div');
  let modalbtn = document.createElement('button');
  description.style.backgroundColor=('yellow')
  
  
}

function createcards(progress) {
  let card = document.createElement("div");
  let addbtn = document.createElement("button");
  let plusdiv = document.createElement('div');

  card.classList.add("card");
  addbtn.classList.add("addbtn");
  container.appendChild(card);
  card.appendChild(plusdiv)
  plusdiv.innerText = ('html')

  card.appendChild.(Xpdescription)
  card.innerHTML = `
  <div>${progress}</div>
  <button>Add card</button>
  `;
  // console.log(modal);
  // card.appendChild(modal);
addbtn.addEventListener('click', () => (modal))
}

function drawcards(array) {
  for (let i = 0; i < array.length; i++) {
    createcards(array[i]);
  }
}
// console.log(drawcards);
drawcards(progress1);
