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
  header.innerText = "Addcard";
  title.innerText = "Title";
  description.innerText = "Description";
  status.innerText = "Status";
  priority.innerText = "Priority";
  desInput.style.height = "200px";

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


function modal(progress) {
  
  prioritybtn.innerText = "Add task";

  let taskInput = [];

  let obj = { title: "" };

  function titleChangeEvent(event) {
    obj.title = event.target.value;

    console.log(event.target.value);
  }

  // titleInput.onchange = titleChangeEvent;

  titleInput.addEventListener("change", (event) => {
    titleChangeEvent(event);
  });

  function submitHandler() {
    console.log({ taskInput });
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
  addbtn.classList.add("button");
  plusdiv.classList.add("plusdiv");

  card.appendChild(heads);
  card.appendChild(plusdiv);
  plusdiv.appendChild(cardtitle);
  plusdiv.appendChild(carddesc);
  card.appendChild(addbtn);
  // console.log(card);
  container.appendChild(card);
  heads.innerText = progress;

  addbtn.onclick = () => {
    let modalopen = document.getElementsByClassName("modalcard");
    modalopen[0].style.display = "flex";
  };
  plusdiv.innerText = "html";
}

function drawcards(array) {
  for (let i = 0; i < array.length; i++) {
    createcards(array[i]);
  }
}
modal();
drawcards(progress1);
