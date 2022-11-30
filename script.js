const taskInput = document.querySelector("#task-input");
const btn_addTask = document.querySelector("#add-task");
const btn_editTask = document.querySelector("#edit-task");
const btn_deleteTask = document.querySelector("#delete-task");
const btn_taskDone = document.querySelector("#task-done");
const btn_taskNotDone = document.querySelector("#task-notdone");

// currently chosen element from the todo list
let chosenTodo = null;

const startingElements = document.querySelectorAll("#todo-list li");

function onClick(e) {
    chosenTodo?.classList.remove("selected");
    chosenTodo = e.target;
    chosenTodo.classList.add("selected");
    console.log(chosenTodo)

    // display button task done/not done depending on chosenTodo's state.
    if (e.target.classList.contains("checked")) {
        btn_taskDone.classList.add("notshown");
        btn_taskNotDone.classList.remove("notshown");
    } else {
        btn_taskDone.classList.remove("notshown");
        btn_taskNotDone.classList.add("notshown");
    }
}

for (const elem of startingElements) {
    elem.addEventListener("click", onClick);
}

function addTask() {
    let li = document.createElement('li');
    li.addEventListener("click", onClick);
    li.classList.add("unchecked");
    let input = document.createTextNode(" " + taskInput.value);
    li.appendChild(input);
    taskInput.value = "";
    document.getElementById('todo-list').appendChild(li);
}

//btn_addTask.onclick = addTask;
document.querySelector('#task-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.addEventListener("keypress", addTask);
        document.getElementById("#task-input").focus();
    }
});

function editTask() {

}

function deleteTask() {
    document.getElementById('todo-list').removeChild(chosenTodo);

}

function taskDone() {
    if (!chosenTodo) return;

    chosenTodo.classList.add("checked");
    chosenTodo.classList.remove("unchecked");
    btn_taskDone.classList.add("notshown");
    btn_taskNotDone.classList.remove("notshown");
}

function taskNotDone() {
    if (!chosenTodo) return;

    chosenTodo.classList.remove("checked");
    chosenTodo.classList.add("unchecked");
    btn_taskDone.classList.remove("notshown");
    btn_taskNotDone.classList.add("notshown");
}

btn_addTask.addEventListener("click", addTask);
btn_deleteTask.addEventListener("click", deleteTask);
btn_editTask.addEventListener("click", editTask);

btn_taskDone.addEventListener("click", taskDone);
btn_taskNotDone.addEventListener("click", taskNotDone);
