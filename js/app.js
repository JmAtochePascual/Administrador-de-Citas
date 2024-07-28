// Importar modulos
import Cita from "./Cita.js";
import Citas from "./Citas.js";
import { citaObj, llenarDatosObjCita, mostrarAlerta, validarEmail, verificarDatosObjCita } from "./funciones.js";
import { emailInputHtml, pacienteInputHtml, propietarioInputHtml, fechaInputHtml, sintomasInputHtml, formularioHtml } from "./selectores.js";

const citas = new Citas();

// Funcion que inicia la aplicacion
const init = (event) => {
  event.preventDefault();

  // Verificar si los campos estan llenos
  const esFormularioValido = verificarDatosObjCita();

  // Validar formulario, si no esta completo, mostrar alerta
  if (!esFormularioValido) {
    mostrarAlerta('Todos los campos son obligatorios', false);
    return;
  }

  // Validar email
  if (!validarEmail()) {
    mostrarAlerta('Email no valido', false);
    return;
  }

  // Crear cita
  const cita = new Cita(citaObj);

  // Agregar cita
  citas.agregarCita(cita);

  console.log(citas);

  // Mostrar alerta de exito
  mostrarAlerta('Cita creada correctamente', true);
}


// Cargar eventos
document.addEventListener('DOMContentLoaded', () => {
  pacienteInputHtml.addEventListener('change', llenarDatosObjCita);
  propietarioInputHtml.addEventListener('change', llenarDatosObjCita);
  emailInputHtml.addEventListener('change', llenarDatosObjCita);
  fechaInputHtml.addEventListener('change', llenarDatosObjCita);
  sintomasInputHtml.addEventListener('change', llenarDatosObjCita);
  formularioHtml.addEventListener('submit', init);
});