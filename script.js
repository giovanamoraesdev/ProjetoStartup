const addTaskButton = document.querySelector(".primary-button")
const taskCard = document.querySelector(".task-card");

addTaskButton.addEventListener("click", addTask)

function addTask() {
    const task = prompt("Digite uma nova tarefa:")
    
    const newTask = document.createElement("p");

    newTask.classList.add("task-item");
    
    newTask.textContent = task;

    taskCard.appendChild(newTask);

}
