const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
   const li =  event.target.parentElement;
   li.remove();
}

function paintTodo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);//<li><span></span></li> 
    li.appendChild(button);//<li><span>blabla<button><button/></span></li> 
    toDoList.appendChild(li);//<ul id="todo-list"><li><span><span/></li></ul>
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value  = "";// input 비우기
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const paredToDos = JSON.parse(savedToDos);
}