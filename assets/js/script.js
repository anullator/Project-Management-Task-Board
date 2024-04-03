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

    event.preventDefault();

    // assign input content to variables
    const title = $("#title").val().trim();
    const dueDate = $("#due-date").val().trim(); 
    const description = $("#description").val().trim();

    let taskList = [];

    // create task object
    const task = { 
        title: title,
        dueDate: dueDate, 
        description: description, 
        status: "todo",
    };

    // checks that all inputs are valid
    if (!title || !dueDate|| !description) {
        alert("All inputs are required to add a task.");
        return;
    }

    // gets tasks from local storage
    if (localStorage.length !== 0) {
        const storage = localStorage.getItem("taskList");
        taskList = JSON.parse(storage);
    }

    // add new task to task list
    taskList.push(task);
    console.log(taskList);

    // update task list in local storage
    const stringList = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringList);

    // empty form input fields
    $("#title").val("");
    $("#due-date").val(""); 
    $("#description").val("");

}

// TODO: create a function to handle deleting a task
function handleDeleteTask(event){

}

// TODO: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// TODO: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

    // const tasks = JSON.parse(localStorage.getItem("taskList")) || [];

    // sort tasks into their respective columns

    $("[type='submit']").on("click", handleAddTask) // add event listener to open modal

});


//TEST STATEMENTS
