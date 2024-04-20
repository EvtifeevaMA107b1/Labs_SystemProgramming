const taskForm = document.getElementById('task-form') as HTMLFormElement;
const taskInput = document.getElementById('task-input') as HTMLInputElement;
const taskList = document.getElementById('task-list') as HTMLUListElement;

let taskId: number = 0;

function addTask(event) {
  event.preventDefault();

  const taskText: string = taskInput.value;

  if (taskText.trim() !== '') {
    const taskItem: HTMLLIElement = document.createElement('li');
    taskItem.classList.add('task');
    taskItem.innerHTML = taskText;
    taskItem.dataset.id = String(taskId++);

    taskItem.addEventListener('click', markTaskComplete);

    const deleteButton: HTMLButtonElement = document.createElement('button');
    deleteButton.innerHTML = 'X';
    taskItem.classList.add('del');

    deleteButton.addEventListener('click', deleteTask);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
}

function markTaskComplete(event) {
  const taskItem: HTMLElement = event.target as HTMLElement;
  taskItem.classList.toggle('complete');
  event.stopPropagation();
}

function deleteTask(event) {
  const taskItem = (event.target as HTMLElement)?.parentElement as HTMLElement;
  if (taskItem) {
    taskList.removeChild(taskItem);
  }
  event.stopPropagation();
}
taskForm.addEventListener('submit', addTask);