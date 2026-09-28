// ===== Inicialização =====

console.log("SCRIPT FUNCIONANDO");


// ===== Dados =====

const tasks = [];


// ===== Elementos e eventos =====

const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {

    const button = cards[i].querySelector(".card-button");
    const input = cards[i].querySelector("input");

    button.addEventListener("click", function () {
        addItem(input, cards[i]);
    });
}


// ===== Funções de tarefas =====

function addItem(input, card) {

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