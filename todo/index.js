let progress1 = ["To do", "In progress", "Stuck", "Done"];

let body = document.querySelector("body");
let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);
let modalcard = document.createElement("div");
  let header = document.createElement("div");
  let title = document.createElement("div");
  let titleInput = document.createElement("input");
  let description = document.createElement("div");
  let desInput = document.createElement("input");
  let status = document.createElement("div");
  let statusbtn = document.createElement("button");
  let priority = document.createElement("div");
  let prioritybtn = document.createElement("button");

  modalcard.classList.add("modalcard");
  header.classList.add('header');
  title.classList.add('title')
  titleInput.classList.add('titleinput')
  description.classList.add('description')
  desInput.classList.add('desInput')
  status.classList.add('status')
  statusbtn.classList.add('statusbtn')
  priority.classList.add('priorrity')
  prioritybtn.classList.add('prioritybtn')


  header.innerText = "Addcard";
  title.innerText = "Title";
  description.innerText = "Description";
  status.innerText = "Status";
  priority.innerText = "Priority";

  container.appendChild(modalcard);
  modalcard.appendChild(header);
  modalcard.appendChild(title);
  modalcard.appendChild(titleInput);
  modalcard.appendChild(description);
  modalcard.appendChild(desInput);
  modalcard.appendChild(status);
  modalcard.appendChild(statusbtn);
  modalcard.appendChild(priority);
  modalcard.appendChild(prioritybtn);


function modal() {
  
  prioritybtn.innerText = "Add task";

  let taskInput = [];

  let obj = { 
    title: "To do",
    description: "this is todo card",
    priority: "high"


};

  function titleChangeEvent(event) {
    obj.title = event.target.value;

    console.log(event.target.value);
  }

  // titleInput.onchange = titleChangeEvent;

  titleInput.addEventListener("change", (event) => {
    titleChangeEvent(event);
  });

  function submitHandler() {
    taskInput.push(obj);
  }

  prioritybtn.onclick = submitHandler;

  console.log(taskInput);
}

function createcards(progress) {
  let card = document.createElement("div");
  let addbtn = document.createElement("button");
  let plusdiv = document.createElement("div");
  let heads = document.createElement("p");
  let cardtitle = document.createElement("p");
  let carddesc = document.createElement("p");

  //modal
  card.classList.add("card");
  addbtn.classList.add("addbtn");
  plusdiv.classList.add("plusdiv");
  heads.classList.add('heads');
  cardtitle.classList.add('cardtitle');
  carddesc.classList.add('carddesc');

  card.appendChild(heads);
  card.appendChild(plusdiv);
  plusdiv.appendChild(cardtitle);
  plusdiv.appendChild(carddesc);
  card.appendChild(addbtn);
  // console.log(card);
  container.appendChild(card);
  heads.innerText = progress;
  addbtn.innerText = '+ Add card'

  addbtn.onclick = () => {
    let modalopen = document.getElementsByClassName("modalcard");
    modalopen[0].style.display = "flex";
  };
  plusdiv.innerText = 'todo';
}

function drawcards(array) {
  for (let i = 0; i < array.length; i++) {
    createcards(array[i]);
  }
}
modal();
drawcards(progress1);
