// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// ✅ create a function to generate a unique task id
function generateTaskId() {
    return Math.floor(Math.random()*Date.now()).toString(16);
}

// TODO: create a function to create a task card
function createTaskCard(task) {

}

// TODO: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// TODO: create a function to handle adding a new task
function handleAddTask(event){

}

// TODO: create a function to handle deleting a task
function handleDeleteTask(event){

}

// TODO: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// TODO: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});


//TEST STATEMENTS
console.log(generateTaskId());
console.log(generateTaskId());
console.log(generateTaskId());
