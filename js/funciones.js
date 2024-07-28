import { formularioHtml } from "./selectores.js";

// Variables
const citaObj = {
  paciente: '',
  propietario: '',
  email: '',
  fecha: '',
  sintomas: ''
};

// llenar datos al objeto cita
const llenarDatosObjCita = (event) => {
  citaObj[event.target.name] = event.target.value.trim();
}


// Verificar datos del objeto cita
const verificarDatosObjCita = () => Object.values(citaObj).every(valor => valor.trim() !== '');

// Mostrar alerta
const mostrarAlerta = (mensaje, tipo) => {

  // Si hay una alerta previa, no crear otra
  const alertaPrevia = document.querySelector('.alerta');
  if (alertaPrevia) return;

  // Crear alerta
  const alerta = document.createElement('p');
  alerta.textContent = mensaje;
  alerta.className = `text-center p-2 text-white font-bold uppercase alerta ${tipo ? 'bg-green-500' : 'bg-red-500'}`;

  // Insertar alerta en el formulario
  formularioHtml.parentElement.insertBefore(alerta, formularioHtml);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
}

// Validar email
const validarEmail = () => {
  const expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return expresion.test(citaObj.email);
}

export {
  llenarDatosObjCita,
  verificarDatosObjCita,
  mostrarAlerta,
  validarEmail
}