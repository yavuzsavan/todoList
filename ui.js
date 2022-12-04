class UI {

    addTask(task) {
        console.log("listeye eklendi");
        
        const li = document.createElement("li");
        li.classList.add("list-group-item","list-group-item-action", "d-flex", "justify-content-between", "align-items-center");
        li.innerHTML = taskInput.value;
    
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.innerHTML= "X";

        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    
    }

    alertFunc = (className = "warning", text = "Listeye Boş ekleme yapamazsınız.") => {
        console.log("alert")
        //     `<div class="alert alert-${className} d-flex" role="alert">
        //     A simple secondary alert—check it out!
        //   </div>`
        return `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${text}</strong>
    </div>`;
    }


    deleteTask = (event) => {
        // console.log(event.target);
        if (event.target.classList.contains("deleteButton")) {
            event.target.parentElement.remove();
        }
    }

}