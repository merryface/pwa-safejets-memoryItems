document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
})

// disable button if procedure is open
const procedureTabTransform = document.getElementById('proceduresCard').style.transform
console.log("Hello!", procedureTabTransform)