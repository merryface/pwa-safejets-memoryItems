export const flashcard = (item) => {  
  let flashcardContainer = document.getElementById("flashcard-container")
  let memoryItemTitle = document.getElementById("memoryItemText")
  let memoryItemSubText = document.getElementById("memoryItemSubText")
  let table = document.getElementById("table-body")

  memoryItemTitle.innerText = item.memoryItem;
  memoryItemSubText.innerText = item.memoryItem;
  flashcardContainer.classList.add(`front-${item.itemType}`)
  memoryItemTitle.classList.add(`text-${item.itemType}`)


  let flashcard = document.getElementById("flashcard")
  flashcard.className = item.itemType

  item.procedure.forEach((procStep) => {
    let row = document.createElement("tr")
    let step = document.createElement("td")
    let action = document.createElement("td")
    step.className = "procedure-step"
    action.className = "procedure-action"

    step.innerText = procStep[0]
    action.innerText = procStep[1]

    console.log(table);
    row.appendChild(step)
    console.log(row);
    row.appendChild(action)
    console.log(row);
    table.appendChild(row)
  })
}
