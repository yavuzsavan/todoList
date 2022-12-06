
const taskInput = document.getElementById("task");
const addButton = document.getElementById("button");

const taskList = document.getElementById("task-list");
const alert = document.getElementById("alert");

const ui = new UI();

eventHandler();

function eventHandler(){
    addButton.addEventListener("click", todoList);
    taskList.addEventListener("click", ui.deleteTask);
}

function todoList(event) {
    event.preventDefault();

    if (taskInput.value) {
        ui.addTask(taskInput.value);
        
        Storage.addTasksToStorage(taskInput.value);
        taskInput.value = "";

        alert.innerHTML = ui.alertFunc("success", "Listeye Eklendi");
        setTimeout( () => {
            alert.innerHTML = "";
        }, 2000);
    }
    else {
        alert.innerHTML = ui.alertFunc();
        setTimeout( () => {
            alert.innerHTML = "";
        }, 2000);
    }

}










