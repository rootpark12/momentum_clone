const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    //greeting.innerText = "Hello, " + username;
    greeting.innerText = `Hello ${username}`;// "" '' 이랑 착각하지 말것;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit",onLoginSubmit);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
console.log(saveUsername);

if (saveUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
    paintGreetings(username);
    //폼이 숨겨지지 않게 한다.
    //유저정보가 local storage에 없으면 null 반환
}else{
    //show the greeting
    paintGreetings(saveUsername);
}