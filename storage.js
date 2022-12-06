class Storage{

    static getTasksFromStorage(){
        let tasks;

        if(localStorage.getItem("task") === null){
            tasks = [];
        }
        else{
            tasks = JSON.parse(localStorage.getItem("task"));
        }

        return tasks;
    }

    static addTasksToStorage(task){
        let todo = this.getTasksFromStorage();

        if(todo.indexOf(task) === -1){
            todo.push(task);
        }
        localStorage.setItem("task", JSON.stringify(todo));
    }

    static deleteFromStorage(){
        localStorage.removeItem();
    }

}