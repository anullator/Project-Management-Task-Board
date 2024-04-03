// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = localStorage.getItem("nextId");

// ✅ create a function to generate a unique task id
function generateTaskId() {
    return Math.floor(Math.random()*Date.now()).toString(16).trim();
}

// TODO: create a function to create a task card
function createTaskCard(task) {

}

// TODO: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// create a function to handle adding a new task
function handleAddTask(event){

    event.preventDefault();

    // assign input content to variables
    const title = $("#title").val().trim();
    const dueDate = $("#due-date").val().trim(); 
    const description = $("#description").val().trim();

    taskList = [];
    nextId = [];

    // create task object
    const task = { 
        title: title,
        dueDate: dueDate, 
        description: description, 
        status: "todo",
    };
    const id = generateTaskId();

    // checks that all inputs are valid
    if (!title || !dueDate|| !description) {
        alert("All inputs are required to add a task.");
        return;
    }

    // gets tasks from local storage
    if (localStorage.length !== 0) {

        const currTasks = localStorage.getItem("tasks");
        taskList = JSON.parse(currTasks);

        const currIds = localStorage.getItem("nextId");
        nextId.push(currIds);
    }

    // add new task to task list array
    taskList.push(task);
    nextId.push(id); 

    // update task list in local storage
    const stringList = JSON.stringify(taskList);
    localStorage.setItem("tasks", stringList);
    localStorage.setItem("nextId", nextId);

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
