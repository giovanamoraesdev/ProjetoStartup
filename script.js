const addTaskButton = document.querySelector(".primary-button")
const taskCard = document.querySelector(".task-card");

addTaskButton.addEventListener("click", addTask)

function addTask() {
    const newTask = document.createElement("p");

    newTask.classList.add("task-item");
    newTask.textContent = "Nova tarefa";

    taskCard.appendChild(newTask);

}
