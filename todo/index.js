const yid = () => {
  return "id-" + Math.random();
};

let data = [
  {
    done: "done",
    title: "Todo",
    desc: "123",
    status: "inprogress",
    id: yid(),
  },
  { id: yid(), done: "done", title: "Todo", desc: "listen lesson", status: "todo" },
];

function listItem(props) {
  let { title, desc, id } = props;
  return `
  <div draggable="true"   class="cardElement flex " id="${id}">
    <button class="doneBtn"><i class="gg-check-o"></i></button>
    <div class="detail flex directionColumn " >
    <div class="flex detail wordwrap wrap"><h3 >${title}</h3></div>
    <div class="flex detail wordwrap wrap"><p >${desc}</p></div>
    </div>
    <button class="closeX">
    <i class="gg-close"></i>
    </button>
    <button class="gg-Pen" >
    <i class="gg-pen"></i>
    </button>
    </div
    `;
}

let body = document.querySelector("body");
let openModal = document.querySelector(".modal");
let addCardOpen = document.querySelectorAll(".addcard");
let closeBtn = document.getElementById("closeBtn");
const boards = document.querySelectorAll(".board");
const card = document.querySelectorAll(".card");
let cardElement = document.querySelector("cardElement");
let todoCount = document.getElementById("todoCount");
let inprogressCount = document.getElementById("inprogressCount");
let stuckCount = document.getElementById("stuckCount");
let doneCount = document.getElementById("doneCount");

const remove = (element) => {
  const newarry = data.filter((item) => item.id !== element.parentElement.id);
  data = newarry;
  render(newarry);
};
const done = (element) => {
  const id = element.parentElement.id;
  const newdone = data.map((item) => {
    if (item.id === id) {
      item.status = "done";
    }
    return item;
  });
  render(newdone);
};

for (const card of addCardOpen) {
  card.addEventListener("click", () => {
    openModalTrigger();
    closeBtn.onclick = function () {
      addTask();
    };
  });
}

function addTask(element, action) {
  if (action === "edit") {
    const id = element.parentElement.id;

    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        let title = document.getElementById("title").value;
        let desc = document.getElementById("desc").value;
        let status = document.getElementById("status").value;
        data[i].title = title;
        data[i].desc = desc;
        data[i].status = status;
      }
    }
    render(data);
    closeModalTrigger();
    return;
  }
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  let status = document.getElementById("status").value;
  title.value = "";
  data.push({ title, desc, status, id: yid() });
  render(data);
  closeModalTrigger();
}

function render(array) {
  const count = {
    todo: 0,
    inprogress: 0,
    stuck: 0,
    done: 0,
  };
  card.forEach((card) => (card.innerHTML = ""));

  array.map((e) => {
    if (e.status === "todo") {
      card[0].innerHTML += listItem(e);
      count.todo += 1;
    }
    if (e.status === "inprogress") {
      card[1].innerHTML += listItem(e);
      count.inprogress += 1;
    }
    if (e.status === "stuck") {
      card[2].innerHTML += listItem(e);
      count.stuck += 1;
    }
    if (e.status === "done") {
      card[3].innerHTML += listItem(e);
      count.done += 1;
    }
  });

  todoCount.innerHTML = count.todo;
  inprogressCount.innerHTML = count.inprogress;
  stuckCount.innerHTML = count.stuck;
  doneCount.innerHTML = count.done;

  let closeX = document.querySelectorAll(".closeX");
  let editBtn = document.querySelectorAll(".gg-Pen");
  let doneBtn = document.querySelectorAll(".doneBtn");

  doneBtn.forEach((element) => {
    element.onclick = () => done(element);
  });

  editBtn.forEach((element) => {
    element.onclick = () => edit(element, "edit");
  });

  closeX.forEach((element) => {
    element.onclick = () => remove(element);
  });
  function edit(element, action) {
    openModalTrigger();
    closeBtn.onclick = () => addTask(element, action);
  }
}

let draggedItem = null;
card.forEach((card) => {
  card.addEventListener("dragstart", (event) => {
    event.target.id;
    draggedItem = event.target;
    event.dataTransfer.setData("text", event.target.getAttribute("id"));
  });
  card.addEventListener("dragend", () => {
    draggedItem = null;
  });
});
boards.forEach((board, index) => {
  board.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  board.addEventListener("dragenter", (event) => {
    event.preventDefault();
    if (draggedItem) {
      const draggingBoard = draggedItem;
      if (draggingBoard !== event.currentTarget) {
        document.querySelectorAll(".card")[index].appendChild(draggedItem);
      }
    }
  });
  board.addEventListener("dragleave", () => {});
  board.addEventListener("drop", (event) => {
    event.preventDefault();
    data.map((e) => {
      if (e.id === draggedItem.id) {
        e.status = board.id;
      }
    });
    render(data);
    console.log(data);
  });
});

render(data);

function openModalTrigger() {
  openModal.style.display = "flex";
}
function closeModalTrigger() {
  openModal.style.display = "none";
}

