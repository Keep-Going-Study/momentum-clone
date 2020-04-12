const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing'; 

function saveName(text){
    localStorage.setItem(USER_LS,text);
}



function handleSubmit(event){
    event.preventDefault(); // form 태그는 기본적으로 ENTER 를 치면
                            // 초기화가 되기 때문에 그것을 강제로 막았음
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit) // submit 이벤트 추가

}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // hide the form
    greeting.classList.add(SHOWING_CN); // show the greeting
    greeting.innerText = `Hello! ${text}!`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){   // not login
        askForName();
    }
    else{   // user login
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();