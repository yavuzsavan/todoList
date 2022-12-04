// let items = [1, 2, 3, 4, 5];

// let femaleUsers = ["ayşe", "fatma", "hayriye"];
// let maleUsers =["ali", "veli", "mehmet"];

// items.unshift(femaleUsers);
// items.push(maleUsers);

// console.log(items);

// // let newItems = items.splice(2,4);
// // console.log(newItems);

// let copyItems = items.slice(2,items.length);
// copyItems.pop();
// console.log("copyItems : ",copyItems);
// console.log("items : ", items);

// let es6Items =[...items];
// console.log(es6Items);
// console.log(items);

// let allUsers = [...femaleUsers, ...maleUsers];
// console.log(allUsers);

// console.log(allUsers.toString())
// console.log(allUsers.join(", "))


// let users = ["lorem", "ipsum", "dolor"];

// const userListDOM = document.querySelector("#userList");


// let index = 0
// for(index = 0; index < users.length; index++){
//     const liDOM = document.createElement("li");
//     liDOM.innerHTML = users[index];
//     userListDOM.appendChild(liDOM);
// }



// const PRODUCTS = ["laptop", "phone", "spekaer", "desktop pc", "server", "mouse", "keyboard", "key", "id", "nick"];

// PRODUCTS.forEach((product, index, array) => console.log(product, index, array));

// PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`);


// const NEW_PRODUCTS = PRODUCTS.filter(item =>  item.length > 5);
// console.log(NEW_PRODUCTS);

// NEW_PRODUCTS.forEach((item) => console.log(item));


// const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];

// const NEW_USERS = USERS.map( user => user.toLowerCase());

// NEW_USERS.forEach((user) => {console.log(user)});


// //////////////////////////////////////////////////////////

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










