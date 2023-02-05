const toDoBtn = document.getElementById("todo-button");
const toDoModal = document.getElementById("todo-modal");

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_MODAL_OVERLAY = "modal-overlay";
const TODOS_HIDDEN_CL = "hidden";
const TODOS_KEY = "todos";

let toDos = [];

toDoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toDoModal.classList.remove(TODOS_HIDDEN_CL);
});

toDoModal.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.classList.contains(TODOS_MODAL_OVERLAY)) {
        toDoModal.classList.add(TODOS_HIDDEN_CL);
    }
});

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDoObj) => (toDoObj.id !== parseInt(li.id)));
    saveToDos();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}