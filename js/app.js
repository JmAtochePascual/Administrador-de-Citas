// Importaciones
import { paciente, propietario, email, fecha, sintomas, formulario } from "./selectores.js";
import { llenarDatosCitaObj, init } from "./funciones.js";


// Cargar eventos
document.addEventListener('DOMContentLoaded', () => {
  paciente.addEventListener('change', llenarDatosCitaObj);
  propietario.addEventListener('change', llenarDatosCitaObj);
  email.addEventListener('change', llenarDatosCitaObj);
  fecha.addEventListener('change', llenarDatosCitaObj);
  sintomas.addEventListener('change', llenarDatosCitaObj);
  formulario.addEventListener('submit', init);
});