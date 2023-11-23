const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
   const li =  event.target.parentElement;
   li.remove();
   toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
   saveToDos();
}

function paintTodo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
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
    const newToDoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const paredToDos = JSON.parse(savedToDos);
    toDos = paredToDos;
    paredToDos.forEach(paintTodo);
    //paintTodo("a"),paintTodo("b"),paintTodo("c")...
}