// ===== Inicialização =====

console.log("SCRIPT FUNCIONANDO");


// ===== Dados =====
const tasks = [];
const habits = [];
const goals = [];
const events = [];
const notes = [];

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

     // BOTÃO EDITAR
const editButton = document.createElement("button");

editButton.textContent = "Editar";

editButton.addEventListener("click", function() {

    const novoNome = prompt("Digite o novo nome da tarefa:");

    if (novoNome !== null && novoNome.trim() !== "") {

        const idClicado = parseInt(itemContainer.dataset.id);

        for (let i = 0; i < tasks.length; i++) {

            if (tasks[i].id === idClicado) {

                tasks[i].name = novoNome.trim();

                localStorage.setItem(
                    "tasks",
                    JSON.stringify(tasks)
                );

                newItem.textContent = tasks[i].name;

                break;
            }
        }
    }
}); 
    //BOTÃO EXCLUIR
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
        itemContainer.appendChild(editButton)
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

        // Garantir que hábitos antigos tenham ID
        if (habits[i].id === undefined) {
            habits[i].id = Date.now() + i;
        }

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("habit-item-container");
        itemContainer.dataset.id = habits[i].id;

        const newItem = document.createElement("p");
        newItem.classList.add("habit-item");
        newItem.textContent = habits[i].name;

        // BOTÃO EDITAR
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";

        editButton.addEventListener("click", function() {

            const novoNome = prompt("Digite o novo nome do hábito:");

            if (novoNome !== null && novoNome.trim() !== "") {

                const idClicado = parseInt(itemContainer.dataset.id);

                for (let j = 0; j < habits.length; j++) {

                    if (habits[j].id === idClicado) {

                        habits[j].name = novoNome.trim();

                        localStorage.setItem(
                            "habits",
                            JSON.stringify(habits)
                        );

                        newItem.textContent = habits[j].name;

                        break;
                    }
                }
            }
        });

        // BOTÃO EXCLUIR
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";

        deleteButton.addEventListener("click", function() {

            const idClicado = parseInt(itemContainer.dataset.id);

            for (let j = 0; j < habits.length; j++) {

                if (habits[j].id === idClicado) {

                    habits.splice(j, 1);

                    localStorage.setItem(
                        "habits",
                        JSON.stringify(habits)
                    );

                    itemContainer.remove();

                    break;
                }
            }
        });

        // JUNTAR OS ELEMENTOS
        itemContainer.appendChild(newItem);
        itemContainer.appendChild(editButton);
        itemContainer.appendChild(deleteButton);

        habitCard.appendChild(itemContainer);
    }

    // Salvar IDs dos hábitos antigos, se necessário
    localStorage.setItem("habits", JSON.stringify(habits));
}


 // Goals
const savedGoals = localStorage.getItem("goals");

if (savedGoals !== null) {

    const recoveredGoals = JSON.parse(savedGoals);

    goals.push(...recoveredGoals);

    const goalCard = document.querySelector(".goal-card");

    for (let i = 0; i < goals.length; i++) {

        if (goals[i].id === undefined) {
            goals[i].id = Date.now() + i;
        }

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("goal-item-container");
        itemContainer.dataset.id = goals[i].id;

        const newItem = document.createElement("p");
        newItem.classList.add("goal-item");
        newItem.textContent = goals[i].name;

        // EDITAR
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";

        editButton.addEventListener("click", function() {

            const novoNome = prompt("Digite o novo nome do objetivo:");

            if (novoNome !== null && novoNome.trim() !== "") {

                const idClicado = parseInt(itemContainer.dataset.id);

                for (let j = 0; j < goals.length; j++) {

                    if (goals[j].id === idClicado) {

                        goals[j].name = novoNome.trim();

                        localStorage.setItem("goals", JSON.stringify(goals));

                        newItem.textContent = goals[j].name;

                        break;
                    }
                }
            }
        });

        // EXCLUIR
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";

        deleteButton.addEventListener("click", function() {

            const idClicado = parseInt(itemContainer.dataset.id);

            for (let j = 0; j < goals.length; j++) {

                if (goals[j].id === idClicado) {

                    goals.splice(j, 1);

                    localStorage.setItem("goals", JSON.stringify(goals));

                    itemContainer.remove();

                    break;
                }
            }
        });

        itemContainer.appendChild(newItem);
        itemContainer.appendChild(editButton);
        itemContainer.appendChild(deleteButton);

        goalCard.appendChild(itemContainer);
    }

    localStorage.setItem("goals", JSON.stringify(goals));
}

 // Calendars
const savedEvents = localStorage.getItem("events");

if (savedEvents !== null) {

    const recoveredEvents = JSON.parse(savedEvents);

    events.push(...recoveredEvents);

    const calendarCard = document.querySelector(".calendar-card");

    for (let i = 0; i < events.length; i++) {

        if (events[i].id === undefined) {
            events[i].id = Date.now() + i;
        }

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("event-item-container");
        itemContainer.dataset.id = events[i].id;

        const newItem = document.createElement("p");
        newItem.classList.add("calendar-item");
        newItem.textContent = events[i].name;

        // EDITAR
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";

        editButton.addEventListener("click", function() {

            const novoNome = prompt("Digite o novo nome do evento:");

            if (novoNome !== null && novoNome.trim() !== "") {

                const idClicado = parseInt(itemContainer.dataset.id);

                for (let j = 0; j < events.length; j++) {

                    if (events[j].id === idClicado) {

                        events[j].name = novoNome.trim();

                        localStorage.setItem("events", JSON.stringify(events));

                        newItem.textContent = events[j].name;

                        break;
                    }
                }
            }
        });

        // EXCLUIR
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";

        deleteButton.addEventListener("click", function() {

            const idClicado = parseInt(itemContainer.dataset.id);

            for (let j = 0; j < events.length; j++) {

                if (events[j].id === idClicado) {

                    events.splice(j, 1);

                    localStorage.setItem("events", JSON.stringify(events));

                    itemContainer.remove();

                    break;
                }
            }
        });

        itemContainer.appendChild(newItem);
        itemContainer.appendChild(editButton);
        itemContainer.appendChild(deleteButton);

        calendarCard.appendChild(itemContainer);
    }

    localStorage.setItem("events", JSON.stringify(events));
}


 // Notes
const savedNotes = localStorage.getItem("notes");

if (savedNotes !== null) {

    const recoveredNotes = JSON.parse(savedNotes);

    notes.push(...recoveredNotes);

    const noteCard = document.querySelector(".note-card");

    for (let i = 0; i < notes.length; i++) {

        if (notes[i].id === undefined) {
            notes[i].id = Date.now() + i;
        }

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("note-item-container");
        itemContainer.dataset.id = notes[i].id;

        const newItem = document.createElement("p");
        newItem.classList.add("note-item");
        newItem.textContent = notes[i].content;

        // EDITAR
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";

        editButton.addEventListener("click", function() {

            const novoConteudo = prompt("Digite o novo conteúdo da nota:");

            if (novoConteudo !== null && novoConteudo.trim() !== "") {

                const idClicado = parseInt(itemContainer.dataset.id);

                for (let j = 0; j < notes.length; j++) {

                    if (notes[j].id === idClicado) {

                        notes[j].content = novoConteudo.trim();

                        localStorage.setItem("notes", JSON.stringify(notes));

                        newItem.textContent = notes[j].content;

                        break;
                    }
                }
            }
        });

        // EXCLUIR
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";

        deleteButton.addEventListener("click", function() {

            const idClicado = parseInt(itemContainer.dataset.id);

            for (let j = 0; j < notes.length; j++) {

                if (notes[j].id === idClicado) {

                    notes.splice(j, 1);

                    localStorage.setItem("notes", JSON.stringify(notes));

                    itemContainer.remove();

                    break;
                }
            }
        });

        itemContainer.appendChild(newItem);
        itemContainer.appendChild(editButton);
        itemContainer.appendChild(deleteButton);

        noteCard.appendChild(itemContainer);
    }

    localStorage.setItem("notes", JSON.stringify(notes));
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
function validarNome(nome) {
    return nome.trim() !== "";}

function criarTarefa(nome) {
    return {
        id: Date.now(),
        name: nome,
        completed: false,
        urgency: "alta",
        createdAt: new Date(),
        completedAt: null
    };
}


function renderizarTarefa(task, card, input) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("task-item-container");
    itemContainer.dataset.id = task.id;

    const newItem = document.createElement("p");
    newItem.classList.add("task-item");
    newItem.textContent = task.name;

    const editButton = document.createElement("button");
    editButton.textContent = "Editar";

    editButton.addEventListener("click", function() {
        const novoNome = input.value.trim();

        if (novoNome !== "") {
            const idClicado = parseInt(itemContainer.dataset.id);

            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].id === idClicado) {
                    tasks[i].name = novoNome;

                    localStorage.setItem(
                        "tasks",
                        JSON.stringify(tasks)
                    );

                    newItem.textContent = tasks[i].name;
                    input.value = "";

                    break;
                }
            }
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";

    deleteButton.addEventListener("click", function() {
        const idClicado = parseInt(itemContainer.dataset.id);

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === idClicado) {
                tasks.splice(i, 1);

                localStorage.setItem(
                    "tasks",
                    JSON.stringify(tasks)
                );

                itemContainer.remove();

                break;
            }
        }
    });

    itemContainer.appendChild(newItem);
    itemContainer.appendChild(editButton);
    itemContainer.appendChild(deleteButton);

    card.appendChild(itemContainer);
}


function addItem(input, card) {

    const item = input.value;

    if (validarNome(item)) {

        // TAREFA
        if (card.classList.contains("task-card")) {

            console.log("É uma tarefa");

            const task = criarTarefa(item);

            tasks.push(task);
            
            localStorage.setItem("tasks", JSON.stringify(tasks));

            renderizarTarefa(task, card, input);

        }

        
        // HÁBITO
        else if (card.classList.contains("habit-card")) {

            console.log("É um hábito");

            const habit = {
                id: Date.now(),
                name: item,
                completed: false,
                createdAt: new Date()
            };

            habits.push(habit);

            const itemContainer = document.createElement("div");
            itemContainer.classList.add("habit-item-container");
            itemContainer.dataset.id = habit.id;

            const newItem = document.createElement("p");
            newItem.classList.add("habit-item");
            newItem.textContent = habit.name;

            // BOTÃO EDITAR
            const editButton = document.createElement("button");
            editButton.textContent = "Editar";

            editButton.addEventListener("click", function() {

                const novoNome = prompt("Digite o novo nome do hábito:");

                if (novoNome !== null && novoNome.trim() !== "") {

                    const idClicado = parseInt(itemContainer.dataset.id);

                    for (let i = 0; i < habits.length; i++) {

                        if (habits[i].id === idClicado) {

                            habits[i].name = novoNome.trim();

                            localStorage.setItem(
                                "habits",
                                JSON.stringify(habits)
                            );

                            newItem.textContent = habits[i].name;

                            break;
                        }
                    }
                }
            });

            // BOTÃO EXCLUIR
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";

            deleteButton.addEventListener("click", function() {

                const idClicado = parseInt(itemContainer.dataset.id);

                for (let i = 0; i < habits.length; i++) {

                    if (habits[i].id === idClicado) {

                        habits.splice(i, 1);

                        localStorage.setItem(
                            "habits",
                            JSON.stringify(habits)
                        );

                        itemContainer.remove();

                        break;
                    }
                }
            });

            itemContainer.appendChild(newItem);
            itemContainer.appendChild(editButton);
            itemContainer.appendChild(deleteButton);

            localStorage.setItem("habits", JSON.stringify(habits));

            card.appendChild(itemContainer);
        }

        
        // OBJETIVO
        else if (card.classList.contains("goal-card")) {

            console.log("É um objetivo");

            const goal = {
                id: Date.now(),
                name: item,
                completed: false,
                createdAt: new Date()
            };

            goals.push(goal);

            const itemContainer = document.createElement("div");
            itemContainer.classList.add("goal-item-container");
            itemContainer.dataset.id = goal.id;

            const newItem = document.createElement("p");
            newItem.classList.add("goal-item");
            newItem.textContent = goal.name;

            // EDITAR
            const editButton = document.createElement("button");
            editButton.textContent = "Editar";

            editButton.addEventListener("click", function() {

                const novoNome = prompt("Digite o novo nome do objetivo:");

                if (novoNome !== null && novoNome.trim() !== "") {

                    const idClicado = parseInt(itemContainer.dataset.id);

                    for (let i = 0; i < goals.length; i++) {

                        if (goals[i].id === idClicado) {

                            goals[i].name = novoNome.trim();

                            localStorage.setItem("goals", JSON.stringify(goals));
                            newItem.textContent = goals[i].name;

                            break;
                        }
                    }
                }
            });

            // EXCLUIR
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";

            deleteButton.addEventListener("click", function() {

                const idClicado = parseInt(itemContainer.dataset.id);

                for (let i = 0; i < goals.length; i++) {

                    if (goals[i].id === idClicado) {

                        goals.splice(i, 1);

                        localStorage.setItem("goals", JSON.stringify(goals));
                        itemContainer.remove();

                        break;
                    }
                }
            });

            itemContainer.appendChild(newItem);
            itemContainer.appendChild(editButton);
            itemContainer.appendChild(deleteButton);

            localStorage.setItem("goals", JSON.stringify(goals));
            card.appendChild(itemContainer);
        }
        
        // EVENTO
        else if (card.classList.contains("calendar-card")) {

            console.log("É um evento");

            const event = {
                id: Date.now(),
                name: item,
                date: null,
                completed: false,
                createdAt: new Date()
            };

            events.push(event);

            const itemContainer = document.createElement("div");
            itemContainer.classList.add("event-item-container");
            itemContainer.dataset.id = event.id;

            const newItem = document.createElement("p");
            newItem.classList.add("calendar-item");
            newItem.textContent = event.name;

            // EDITAR
            const editButton = document.createElement("button");
            editButton.textContent = "Editar";

            editButton.addEventListener("click", function() {

                const novoNome = prompt("Digite o novo nome do evento:");

                if (novoNome !== null && novoNome.trim() !== "") {

                    const idClicado = parseInt(itemContainer.dataset.id);

                    for (let i = 0; i < events.length; i++) {

                        if (events[i].id === idClicado) {

                            events[i].name = novoNome.trim();

                            localStorage.setItem("events", JSON.stringify(events));
                            newItem.textContent = events[i].name;

                            break;
                        }
                    }
                }
            });

            // EXCLUIR
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";

            deleteButton.addEventListener("click", function() {

                const idClicado = parseInt(itemContainer.dataset.id);

                for (let i = 0; i < events.length; i++) {

                    if (events[i].id === idClicado) {

                        events.splice(i, 1);

                        localStorage.setItem("events", JSON.stringify(events));
                        itemContainer.remove();

                        break;
                    }
                }
            });

            itemContainer.appendChild(newItem);
            itemContainer.appendChild(editButton);
            itemContainer.appendChild(deleteButton);

            localStorage.setItem("events", JSON.stringify(events));
            card.appendChild(itemContainer);
        }


        // NOTA
        else if (card.classList.contains("note-card")) {

            console.log("É uma nota");

            const note = {
                id: Date.now(),
                content: item,
                createdAt: new Date()
            };

            notes.push(note);

            const itemContainer = document.createElement("div");
            itemContainer.classList.add("note-item-container");
            itemContainer.dataset.id = note.id;

            const newItem = document.createElement("p");
            newItem.classList.add("note-item");
            newItem.textContent = note.content;

            // EDITAR
            const editButton = document.createElement("button");
            editButton.textContent = "Editar";

            editButton.addEventListener("click", function() {

                const novoConteudo = prompt("Digite o novo conteúdo da nota:");

                if (novoConteudo !== null && novoConteudo.trim() !== "") {

                    const idClicado = parseInt(itemContainer.dataset.id);

                    for (let i = 0; i < notes.length; i++) {

                        if (notes[i].id === idClicado) {

                            notes[i].content = novoConteudo.trim();

                            localStorage.setItem(
                                "notes",
                                JSON.stringify(notes)
                            );

                            newItem.textContent = notes[i].content;

                            break;
                        }
                    }
                }
            });

            // EXCLUIR
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";

            deleteButton.addEventListener("click", function() {

                const idClicado = parseInt(itemContainer.dataset.id);

                for (let i = 0; i < notes.length; i++) {

                    if (notes[i].id === idClicado) {

                        notes.splice(i, 1);

                        localStorage.setItem(
                            "notes",
                            JSON.stringify(notes)
                        );

                        itemContainer.remove();

                        break;
                    }
                }
            });

            itemContainer.appendChild(newItem);
            itemContainer.appendChild(editButton);
            itemContainer.appendChild(deleteButton);

            localStorage.setItem(
                "notes",
                JSON.stringify(notes)
            );

            card.appendChild(itemContainer);
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
