// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    const deleteButton = document.createElement('button');

    taskTextSpan.textContent = taskText;
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
}

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}

// Function to mark a task as completed
function markCompleted(event) {
  const taskTextSpan = event.target;
  taskTextSpan.classList.toggle('completed');
}

// Event listener for marking a task as completed
taskList.addEventListener('click', markCompleted);