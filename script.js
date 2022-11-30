const taskInput = document.querySelector("#task-input");
const btn_addTask = document.querySelector("#add-task");
const btn_editTask = document.querySelector("#edit-task");
const btn_deleteTask = document.querySelector("#delete-task");

// currently chosen element from the todo list
let chosenTodo = null;

const startingElements = document.querySelectorAll("#todo-list li");

for (const elem of startingElements) {
    elem.addEventListener("click", (e) => {
        chosenTodo?.classList.remove("selected");
        chosenTodo = e.target;
        chosenTodo.classList.add("selected");
        console.log(chosenTodo)
    })
}


function addTask() {
    let li = document.createElement('li');
    input = document.createTextNode(taskInput.value);
    li.appendChild(input);
    taskInput.value = "";
    document.getElementById('todo-list').appendChild(li);
}
//btn_addTask.onclick = addTask;

function editTask() {

}

function deleteTask() {

}

btn_addTask.addEventListener("click", addTask);
btn_deleteTask.addEventListener("click", deleteTask);
btn_editTask.addEventListener("click", editTask);
