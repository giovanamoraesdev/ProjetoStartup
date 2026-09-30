// ===== Inicialização =====

console.log("SCRIPT FUNCIONANDO");


// ===== Dados =====

const tasks = [];
const savedTasks = localStorage.getItem("tasks");
if(savedTasks !== null){
    const recoveredTasks = JSON.parse(savedTasks);
    tasks.push(...recoveredTasks);
    const taskCard = document.querySelector(".task-card");
    for(let i = 0; i < tasks.length; i++){
        const newItem = document.createElement("p");
        newItem.classList.add("task-item");
        newItem.textContent = tasks[i].name;
        taskCard.appendChild(newItem);
    }
}

// ===== Elementos e eventos =====

const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {

    const button = cards[i].querySelector(".card-button");
    const input = cards[i].querySelector("input");
    
    if (cards[i].classList.contains("task-card")) {
    console.log("É uma tarefa");
} 
    else if (cards[i].classList.contains("habit-card")) {
    console.log("É um hábito");
}

    else if (cards[i].classList.contains("goal-card")) {
    console.log("É um objetivo");
}
    else if (cards[i].classList.contains("calendar-card")) {
    console.log("É um evento no calendário");
}
    else if (cards[i].classList.contains("note-card")) {
    console.log("É uma nota");
}  


    button.addEventListener("click", function () {
        addItem(input, cards[i]);
    });
}


// ===== Funções de tarefas =====

function addItem(input, card) {
     
    if (card.classList.contains("task-card")) {
    console.log("É uma tarefa");
}
    else if (card.classList.contains("habit-card")) {
    console.log("É um hábito");
}

    const item = input.value;

    if (item.trim() !== "") {

        const task = {
            name: item,
            completed: false,
            urgency: "alta",
            createdAt: new Date(),
            completedAt: null
        };

        tasks.push(task);

        const newItem = document.createElement("p");

        newItem.classList.add("task-item");
        newItem.textContent = task.name;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        card.appendChild(newItem);

        input.value = "";
    }
}


// ===== Funções de API =====

async function buscarTarefa() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/nao-existe"
        );

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const data = await response.json();

        const message = document.querySelector(".task-message");
        message.textContent = data.title;

        console.log(data);

    } catch (error) {

        console.log("Ocorreu um erro", error);
    }
}


// ===== Execução =====

buscarTarefa();



