"use strict";
const dateTitle = document.querySelector("#date-title");
const addForm = document.querySelector("#add-form");
const addInput = document.querySelector("#add-input");
const addBtn = document.querySelector("#add-btn");
const taskCount = document.querySelector("#task-count");
const todoList = document.querySelector("#todo-list");
const todoItem = document.querySelector("#todo-item");
// 필요없어짐
// interface TodoList {
//     todoList : Todo[]
// }
// ==============================================================================
// 초기생성
// let currentTodoList : TodoList= {
//     todoList: []
// }
senseToday();
senseTaskCount();
// ==============================================================================
// date title 완성
function senseToday() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const yoil = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
    dateTitle.textContent = `${year}년 ${month}월 ${day}일 (${yoil})`;
}
// + 버튼 누르기
addForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const currentTodo = makeTodo();
    if (currentTodo instanceof Error)
        return;
    // addTodoToTodoListObj(currentTodo)
    completeTodoList(currentTodo);
    senseTaskCount();
});
// todo 만들기기
function makeTodo() {
    const currentTodo = {
        work: addInput.value
    };
    if (!currentTodo.work)
        return new Error("입력이 없습니다.");
    todoAddReset();
    return currentTodo;
}
// 만든 todo를 list에 삽입
// function addTodoToTodoListObj(todo : Todo | Error) : void {
//     if(!(todo instanceof Error)) {
//         currentTodoList.todoList.push(todo)
//     }
//     return
// }
// task count 가 오름
function senseTaskCount() {
    const count = todoList?.querySelectorAll("li").length ?? 0;
    if (taskCount)
        taskCount.textContent = `${count} tasks left`;
}
// todoList 완성하기
function completeTodoList(todo) {
    const li = makeEditInput(todo);
    setTodoList(li);
}
// 완성된 editInput을 todolist<ul>에 넣기 
function setTodoList(li) {
    completeEditInput(li);
    todoList.appendChild(li);
}
// 만든 iconBtn을 editInput에 넣기
function completeEditInput(li) {
    const putBtn = makeMakeIconBtn("수정");
    const deleteBtn = makeMakeIconBtn("삭제");
    li.appendChild(putBtn);
    li.appendChild(deleteBtn);
}
// editInput 만들기
function makeEditInput(todo) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (!(todo instanceof Error)) {
        const input = document.createElement("input");
        input.classList.add("edit-input");
        input.value = todo.work;
        input.readOnly = true;
        li.append(input);
    }
    return li;
}
// iconBtn 만들기
function makeMakeIconBtn(input) {
    const btn = document.createElement("button");
    btn.classList.add("icon-btn");
    btn.innerHTML = `${input}`;
    if (input === "수정") {
        btn.id = "edit-btn";
    }
    else if (input === "삭제") {
        btn.id = "delete-btn";
    }
    return btn;
}
// todo 입력 후
function todoAddReset() {
    addInput.value = "";
}
// 수정이나 삭제 버튼 누를 때
todoList?.addEventListener("click", (e) => {
    const target = e.target;
    const li = target.closest("li");
    if (!li)
        return;
    pushEdit(target, li);
    pushDelete(target, li);
});
// 수정버튼
function pushEdit(target, li) {
    const input = li.querySelector(".edit-input");
    if (!input)
        return;
    if (target.matches("#edit-btn")) {
        input.readOnly = false;
        input.focus();
    }
    input.addEventListener("blur", () => {
        input.readOnly = true;
    });
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            input.readOnly = true;
            input.blur();
        }
    });
}
// 삭제버튼
function pushDelete(target, li) {
    if (target.matches("#delete-btn")) {
        todoList.removeChild(li);
        senseTaskCount();
    }
}
