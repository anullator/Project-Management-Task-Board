// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = localStorage.getItem("nextId");

// ✅ create a function to generate a unique task id
function generateTaskId() {
    return Math.floor(Math.random()*Date.now()).toString(16).trim();
}

// TODO: create a function to create a task card
function createTaskCard(task, currDate) {

    // determine days from today until the due date
    const remainingDays = currDate.diff(task.dueDate, 'day')*-1;
    let daysLeft;

    // sets text based on days until deadline
    if (remainingDays > 0) {
        daysLeft = `Due in ${remainingDays} days`;
    } else if (remainingDays === 1) {
        daysLeft = 'Due tomorrow';
    } else if (remainingDays == 0) {
        daysLeft = 'Due today';
    } else {
        daysLeft = `${Math.abs(remainingDays)} days overdue`;
    }

    // create all elements
    const containerEl = document.createElement("article");
    const h3El = document.createElement("h3");
    const descEl = document.createElement("p");
    const daysTilDue = document.createElement("p");
    const timeEl = document.createElement("time");
    const btnEl = document.createElement("button");

    // add content to elmts
    h3El.textContent = task.title;

    //TODO: change remaining days content to explain how close it is to due
    daysTilDue.textContent = daysLeft;
    descEl.textContent = task.description;
    timeEl.textContent = task.dueDate;
    btnEl.textContent = "Delete";

    // TODO: add necessary classes to the elements including for styling
    // container classes
    containerEl.classList.add("task-card");
    // timeEl.attr("datetime");
    // timeEl.text(task.dueDate);

    // add elmts to container
    containerEl.appendChild(h3El);
    containerEl.appendChild(daysTilDue);
    containerEl.appendChild(descEl);
    containerEl.appendChild(timeEl);
    containerEl.appendChild(btnEl);

    return containerEl;
}

// TODO: create a function to render the task list and make cards draggable
function renderTaskList() {

    const todayObj = dayjs(); // today's date
    const storedTasks = localStorage.getItem("tasks"); // retrieve tasks from storage
    const allTasks = JSON.parse(storedTasks); // converts JSON tasks to js

    // TEST
    // console.log(allTasks);
    // console.log(today);
    // console.log(todayObj);
    // const today = dayjs().format('MM-DD-YYYY');

    allTasks.forEach(task => {
        const nextTask = createTaskCard(task, todayObj); // creates new task card

        // TODO: modify to be based on the task status
        $("#todo-cards").append(nextTask); // adds task card to it's container  
    });
}

// create a function to handle adding a new task
function handleAddTask(event) {
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

    const id = generateTaskId(); // creates unique id

    // checks that all inputs are valid
    if (!title || !dueDate|| !description) {
        alert("All inputs are required to add a task.");
        return;
    }

    // gets tasks and IDs from local storage
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

    renderTaskList();

    $("[type='submit']").on("click", handleAddTask) // add event listener to open modal

});


//TEST STATEMENTS
