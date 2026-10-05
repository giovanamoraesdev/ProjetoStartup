// ===== Inicialização =====

console.log("SCRIPT FUNCIONANDO");


// ===== Dados =====
const tasks = [];
const habits = [];
const goals = [];
const events = [];
const notes = [];

// Tasks
// Tasks
const savedTasks = localStorage.getItem("tasks");

if (savedTasks !== null) {

    const recoveredTasks = JSON.parse(savedTasks);

    tasks.push(...recoveredTasks);

    const taskCard = document.querySelector(".task-card");

    for (let i = 0; i < tasks.length; i++) {

        // Cria um ID para tarefas antigas que ainda não possuem
        if (tasks[i].id === undefined) {
            tasks[i].id = Date.now() + i;
        }

        const itemContainer = document.createElement("div");

        itemContainer.classList.add("task-item-container");

        itemContainer.dataset.id = tasks[i].id;

        const newItem = document.createElement("p");

        newItem.classList.add("task-item");
        newItem.textContent = tasks[i].name;

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Excluir";

        deleteButton.addEventListener("click", function() {

            const idClicado = parseInt(itemContainer.dataset.id);

            for (let i = 0; i < tasks.length; i++) {

                if (tasks[i].id === idClicado) {

                    tasks.splice(i, 1);

                    localStorage.setItem("tasks", JSON.stringify(tasks));

                    itemContainer.remove();

                    break;
                }
            }
        });

        itemContainer.appendChild(newItem);
        itemContainer.appendChild(deleteButton);

        taskCard.appendChild(itemContainer);
    }

    // Salva os IDs criados para tarefas antigas
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Habits
const savedHabits = localStorage.getItem("habits");

if (savedHabits !== null) {

    const recoveredHabits = JSON.parse(savedHabits);

    habits.push(...recoveredHabits);

    const habitCard = document.querySelector(".habit-card");

    for (let i = 0; i < habits.length; i++) {

        const newItem = document.createElement("p");

        newItem.classList.add("habit-item");
        newItem.textContent = habits[i].name;

        habitCard.appendChild(newItem);
    }
}

// Goals
const savedGoals = localStorage.getItem("goals");

if (savedGoals !== null) {

    const recoveredGoals = JSON.parse(savedGoals);

    goals.push(...recoveredGoals);

    const goalCard = document.querySelector(".goal-card");

    for (let i = 0; i < goals.length; i++) {

        const newItem = document.createElement("p");

        newItem.classList.add("goal-item");
        newItem.textContent = goals[i].name;

        goalCard.appendChild(newItem);
    }
}

// Calendars
const savedEvents = localStorage.getItem("events");

if (savedEvents !== null) {

    const recoveredEvents = JSON.parse(savedEvents);

    events.push(...recoveredEvents);

    const calendarCard = document.querySelector(".calendar-card");

    for (let i = 0; i < events.length; i++) {

        const newItem = document.createElement("p");

        newItem.classList.add("calendar-item");
        newItem.textContent = events[i].name;

        calendarCard.appendChild(newItem);
    }
}

// Notes
const savedNotes = localStorage.getItem("notes");

if (savedNotes !== null) {

    const recoveredNotes = JSON.parse(savedNotes);

    notes.push(...recoveredNotes);

    const noteCard = document.querySelector(".note-card");

    for (let i = 0; i < notes.length; i++) {

        const newItem = document.createElement("p");

        newItem.classList.add("note-item");
        newItem.textContent = notes[i].content;

        noteCard.appendChild(newItem);
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

    const item = input.value;

    if (item.trim() !== "") {

        // TAREFA
        if (card.classList.contains("task-card")) {

            console.log("É uma tarefa");

            const task = {
                id: Date.now(),
                name: item,
                completed: false,
                urgency: "alta",
                createdAt: new Date(),
                completedAt: null
            };

            tasks.push(task);

            const itemContainer = document.createElement("div");
            itemContainer.classList.add("task-item-container");

            itemContainer.dataset.id = task.id;

            const newItem = document.createElement("p");

            newItem.classList.add("task-item");
            newItem.textContent = task.name;

            const deleteButton = document.createElement("button");

            deleteButton.textContent = "Excluir";
            deleteButton.addEventListener("click",function(){
                const idClicado = parseInt(itemContainer.dataset.id);

                for(let i = 0; i < tasks.length; i++){

                    if (tasks[i].id === idClicado){

                        tasks.splice(i,1);

                        localStorage.setItem("tasks", JSON.stringify(tasks));

                        itemContainer.remove();

                        break;

                    }
                }
            });

            itemContainer.appendChild(newItem);
            itemContainer.appendChild(deleteButton);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            card.appendChild(itemContainer);
        }

        // HÁBITO
        else if (card.classList.contains("habit-card")) {

            console.log("É um hábito");

            const habit = {
                name: item,
                completed: false,
                createdAt: new Date()
            };

            habits.push(habit);

            const newItem = document.createElement("p");

            newItem.classList.add("habit-item");
            newItem.textContent = habit.name;

            localStorage.setItem("habits", JSON.stringify(habits));

            card.appendChild(newItem);
        }

        // OBJETIVO
        else if (card.classList.contains("goal-card")) {

            console.log("É um objetivo");

            const goal = {
                name: item,
                completed: false,
                createdAt: new Date()
            };

            goals.push(goal);

            const newItem = document.createElement("p");

            newItem.classList.add("goal-item");
            newItem.textContent = goal.name;

            localStorage.setItem("goals", JSON.stringify(goals));

            card.appendChild(newItem);
        }

        // EVENTO
        else if (card.classList.contains("calendar-card")) {

            console.log("É um evento");

            const event = {
                name: item,
                date: null,
                completed: false,
                createdAt: new Date()
            };

            events.push(event);

            const newItem = document.createElement("p");

            newItem.classList.add("event-item");
            newItem.textContent = event.name;

            localStorage.setItem("events", JSON.stringify(events));

            card.appendChild(newItem);
        }

        // NOTA
        else if (card.classList.contains("note-card")) {

            console.log("É uma nota");

            const note = {
                content: item,
                createdAt: new Date()
            };

            notes.push(note);

            const newItem = document.createElement("p");

            newItem.classList.add("note-item");
            newItem.textContent = note.content;

            localStorage.setItem("notes", JSON.stringify(notes));

            card.appendChild(newItem);
        }

        // LIMPA O INPUT
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
