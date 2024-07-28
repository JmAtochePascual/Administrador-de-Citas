// Importar modulos
import Paciente from "./Paciente.js";
import Pacientes from "./Pacientes.js";
import { pacienteObj, llenarDatosObjCita, mostrarAlerta, validarEmail, verificarDatosObjCita, reiniciarObjPaciente, listarPacientes } from "./funciones.js";
import { emailInputHtml, pacienteInputHtml, propietarioInputHtml, fechaInputHtml, sintomasInputHtml, formularioHtml } from "./selectores.js";

const pacientes = new Pacientes();

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

  // Crear paciente
  const paciente = new Paciente(pacienteObj);

  // Agregar paciente
  pacientes.agregarPaciente(paciente);

  // Mostrar alerta de exito
  mostrarAlerta('Paciente creado correctamente', true);

  // Listar pacientes
  listarPacientes();

  // Reiniciar objeto paciente
  reiniciarObjPaciente();

  // Reiniciar formulario
  formularioHtml.reset();
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


export {
  pacientes
}