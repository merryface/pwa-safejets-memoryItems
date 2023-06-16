document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
})



// disable button if procedure is open
const moreVert = document.getElementById('moreVert')
const memoryItemSubText = document.getElementById('memoryItemSubText')
let procedureTabOpen = false

moreVert.addEventListener('click', function() {
  procedureTabOpen = !procedureTabOpen
  if (procedureTabOpen) {
    document.getElementById('rightButton').classList.add('disabled')
    document.getElementById('wrongButton').classList.add('disabled')
  }
})

memoryItemSubText.addEventListener('click', function() {
  procedureTabOpen = !procedureTabOpen
  if (!procedureTabOpen) {
    document.getElementById('rightButton').classList.remove('disabled')
    document.getElementById('wrongButton').classList.remove('disabled')
  }
})