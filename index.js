console.log('My code is running');
//console.log(document.querySelector('h1'));



let btn = document.querySelector('button');
let user_input = document.querySelector('input');
let form = document.querySelector('form');
let dlt_btn = document.getElementById('delete-btn');
let chg_btn = document.getElementById('change-btn');


function createTask(event){
  //This is how we access user input - eventObject.target.value
  /* let new_task = document.createElement('div');
  let task_text = eventObject.target.value;
  new_task.appendChild(task_text);
  let container = document.querySelector('#container');
  container.appendChild(new_task);
  container.insertBefore(new_task, container.childNodes[0]); */

  //collect the user input for the new task and store it in the variable newTaskStr
  event.preventDefault();

  let newTaskStr = document.getElementById("my-input").value;
  console.log(newTaskStr);

  //create a new "li" HTML element to store the new task
  let newTaskElement = document.createElement('li');

  //create a text node
  let newTaskTextNode = document.createTextNode(newTaskStr);

  //Append text node to list item
  newTaskElement.appendChild(newTaskTextNode);

  //Equivalent in HTML is <div> New Task </div>

  //set a unique task-id by finding the total length of the class "task"
  let taskList = document.querySelectorAll("#task")

  //set the new task id to 1 + the length of the array taskList
  let newTask_ID_Num = taskList.length+1;

  //assign the ID attribute of the newly created HTML element
  newTaskElement.setAttribute('id', "task-"+newTask_ID_Num.toString());

  //assign the class attribute of the newly created HTML element to "task"
  newTaskElement.setAttribute('class', "task");

  //Append the new HTML element to the DOM:
  let taskListHTML = document.getElementById('task-list')

  taskListHTML.appendChild(newTaskElement);
  //event.preventDefault();
  console.log(event);
  //taskListHTML.insertBefore(newTaskElement, lastTask);
  //document.getElementByID("task-list").prepend(newTaskElement);
// document.getElementById("task-list").prepend()
}

function changeTask(event){
  //
  event.preventDefault();
  //obtain the task element to be changed
  let task_ID = 'task-'+document.getElementById('change-input-ID').value;

  //obtain the new task text
  let revisedTask = document.getElementById('revised-value').value;

  //obtain the HTML element for the associated task ID
  let taskToChange = document.getElementById(task_ID);

  if (taskToChange) {
    taskToChange.textContent = revisedTask;
  }
  else{
    console.log('Task ID not recognized');
  }
}

function deleteTask(event){
  //
}

form.addEventListener("submit", (event) => {
  createTask(event);
});

dlt_btn.addEventListener('click', (event) => {
  deleteTask(event);
})

chg_btn.addEventListener('click', (event) => {
  changeTask(event);
})

// newTaskElement.addEventListener("click", () => {
//  newTaskElement.classList.toggle("completed";)
//});
