console.log('My code is running');
//console.log(document.querySelector('h1'));



let btn = document.querySelector('button');
let user_input = document.querySelector('input');
let form = document.querySelector('form');

function createTask(eventObject){
  //This is how we access user input - eventObject.target.value
  let new_task = document.createElement('div');
  let task_text = eventObject.target.value;
  new_task.appendChild(task_text);
  let container = document.querySelector('#container');
  container.appendChild(new_task);
  container.insertBefore(new_task, container.childNodes[0]);
}

form.addEventListener("submit", function(eventObject){
  createTask(eventObject);
});


