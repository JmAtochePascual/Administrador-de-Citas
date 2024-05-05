import Notificacion from "./clases/Notificacion.js";
import Cita from "./clases/Cita.js";

export const citaObj = {
  paciente: '',
  propietario: '',
  email: '',
  fecha: '',
  sintomas: ''
};

export let editar = {
  editar: false
};

export let notificacion = new Notificacion();;
export const cita = new Cita();

