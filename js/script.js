// BARRA NAVEGACION

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
      document.querySelector(".nav-links").
      classList.toggle("nav-links-responsive")})



//BOTON
// obtenemos el boton por su id
let miboton = document.getElementById("miBoton");

// se define la funcion a ejecutar
function amiclick(){}

// Añadimos un oyente de eventos que "escuche" el evento "click"

miboton.addEventListener("click", function(amiclick){
    alert("Haz hecho clic en este otro boton");
});

// Fomulario

// La funcion "validateEmail indica que el email contenga un caracter especial"

const form = document.getElementById('myForm');

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const input = document.getElementById('email');
    const inputValue = input.value;
    
    if (!validateEmail(inputValue)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.')
    }
  }

  // hace la validacion antes de enviar
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
    });