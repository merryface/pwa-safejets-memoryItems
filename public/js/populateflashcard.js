export const populateflashcard = (item) => {  
  let flashcardContainer = document.getElementById("flashcard-container");
  let memoryItemTitle = document.getElementById("memoryItemText");
  let memoryItemSubText = document.getElementById("memoryItemSubText");
  let table = document.getElementById("table-body");

  memoryItemTitle.innerText = item.memoryItem;
  memoryItemSubText.innerText = item.memoryItem;
  flashcardContainer.classList.add(`front-${item.itemType}`);
  memoryItemTitle.classList.add(`text-${item.itemType}`);

  let flashcard = document.getElementById("flashcard");
  flashcard.className = item.itemType;

  // Clear table rows
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  item.procedure.forEach((procStep) => {
    let row = document.createElement("tr");
    let step = document.createElement("td");
    let action = document.createElement("td");
    step.className = "procedure-step";
    action.className = "procedure-action";

    step.innerText = procStep[0];
    action.innerText = procStep[1];

    row.appendChild(step);
    row.appendChild(action);
    table.appendChild(row);
  });
};
