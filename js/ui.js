document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
})



// disable button if procedure is open
const rightButton = document.getElementById('rightButton')
const wrongButton = document.getElementById('wrongButton')
const flashcardCard = document.getElementById('flashcard-card')
const proceduresCard = document.getElementById('proceduresCard')
let procedureTabOpen = false

// Pressing Right or Wrong Buttons will cause the procedure to coklapse
const resetProcedureToHide = () => {
  proceduresCard.setAttribute('style', 'display: none; transform: translateY(0%)');
  flashcardCard.setAttribute('style', 'overflow:visible');
}

rightButton.addEventListener('click', resetProcedureToHide)
wrongButton.addEventListener('click', resetProcedureToHide)
