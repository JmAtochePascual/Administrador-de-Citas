// Importar modulos
import { llenarDatosObjCita } from "./funciones.js";
import { emailInputHtml, pacienteInputHtml, propietarioInputHtml, fechaInputHtml, sintomasInputHtml } from "./selectores.js";



// Cargar eventos
document.addEventListener('DOMContentLoaded', () => {
  pacienteInputHtml.addEventListener('change', llenarDatosObjCita);
  propietarioInputHtml.addEventListener('change', llenarDatosObjCita);
  emailInputHtml.addEventListener('change', llenarDatosObjCita);
  fechaInputHtml.addEventListener('change', llenarDatosObjCita);
  sintomasInputHtml.addEventListener('change', llenarDatosObjCita);
});