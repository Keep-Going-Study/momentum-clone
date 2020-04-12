const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = []; // toDoObj 를 담을 배열

function deleteToDo(){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    
    const cleanToDos = toDos.filter(function(toDos_item){
        //console.log(toDos_item, li);
        return toDos_item.id !== parseInt(li.id);
        // toDos_item : toDos array 에 있는 item들 (toDoObj)
        // li : 삭제 버튼을 누른 li 항목
        // 삭제 버튼을 누른 li 항목을 제외한 나머지 항목들만 cleanToDos 배열에 저장한다.
    });
    
    toDos = cleanToDos; // toDos 를 cleanToDos 로 최신화
    saveToDos(); 
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // localStorage 에 저장을 할려면 string 형식으로 저장을 해야함.
    // JSON : JavaScript Object Notation
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener('click',deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {   // localStorage 에 toDo 를 저장하기 위해 객체 생성
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos();
    
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // JSON.parse 를 하기 전에는 string 형태로 넘어와서 객체로 다룰 수가 없음
        //console.log(loadedToDos); 
        const parsedToDos = JSON.parse(loadedToDos);
       // console.log(parsedToDos); 객체로 다룰 수 있음

       
       parsedToDos.forEach(function(toDo_item){ // toDo_item : parsedToDos 배열 각각의 요소
           paintToDo(toDo_item.text);
       })
       

       /* 위 코드는 아래와 같은 의미임

       parsedToDos.forEach(something);

       function something(toDo){
           paintToDo(toDo_item.text);
       }

       */
       


    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener('submit',handleSubmit);

}

init();