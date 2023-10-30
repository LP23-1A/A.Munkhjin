let progress1 = ["To do", "In progress", "Stuck", "Done"];

let body = document.querySelector("body");
let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

function createcards(progress) {
  let card = document.createElement("div");
  let addbtn = document.createElement("button");
  let plusdiv = document.createElement('div');

  card.classList.add("card");
  addbtn.classList.add("addbtn");
  container.appendChild(card);
  card.appendChild(plusdiv)
  plusdiv.innerText = ('html')

  //   card.appendChild(addbtn);

  card.innerHTML = `
  <div>${progress}</div>
  <button>Add card</button>
  `;

  //   way 1 innerHtml
  //  way 2 div add child div

  //   addbtn.innerText = "add card";
}

function drawcards(array) {
  for (let i = 0; i < array.length; i++) {
    createcards(array[i]);
  }
}
// console.log(drawcards);
drawcards(progress1);
