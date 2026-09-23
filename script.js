const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {

    const button = cards[i].querySelector(".card-button");
    const input = cards[i].querySelector("input");

    button.addEventListener("click", function () {
        addItem(input, cards[i]);
    });
}


function addItem(input, card) {

    const item = input.value;

    if (item.trim() !== "") {

        const newItem = document.createElement("p");

        newItem.classList.add("task-item");
        newItem.textContent = item;

        card.appendChild(newItem);

        input.value = "";
    }
}