// Importaciones
import { citaObj, cita, notificacion, editar } from "./variables.js";
import { formulario } from "./selectores.js";


// Llenar datos de la cita
export const llenarDatosCitaObj = (e) => {
  citaObj[e.target.name] = e.target.value.trim();
};


// Reiniciar el objeto de la cita
export const reiniciarCitaObj = () => {
  Object.assign(citaObj, {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
  });
};


// Editar cita
export const editarCita = (citaMemory) => {
  paciente.value = citaMemory.paciente;
  propietario.value = citaMemory.propietario;
  email.value = citaMemory.email;
  fecha.value = citaMemory.fecha;
  sintomas.value = citaMemory.sintomas;
  citaObj.id = citaMemory.id;

  Object.assign(citaObj, citaMemory);
  editar.editar = true;

  formulario.querySelector('input[type="submit"]').value = 'Guardar Cambios';
}


// Eliminar cita
export const eliminarCita = (id) => {
  cita.eliminarCita(id);
}


// Inica la app
export const init = (event) => {
  event.preventDefault();

  // Valida si hay campos vacios
  if (Object.values(citaObj).includes('')) {
    notificacion.mostrarNotificacion('Todos los campos son obligatorios', false);
    return;
  };

  if (editar.editar) {

    cita.editarCita({ ...citaObj });

    // Muestra notificacion de exito
    notificacion.mostrarNotificacion('Cita actualizada correctamente');

    // Cambiar el texto del boton
    formulario.querySelector('input[type="submit"]').value = 'Registrar Paciente';

    // Cambiar el modo de edicion
    editar.editar = false;
  } else {
    // Agrega la cita al arreglo de citas
    cita.agregarCita({ ...citaObj });

    // Muestra notificacion de exito
    notificacion.mostrarNotificacion('Cita creada correctamente');
  }

  // Reiniciar el objeto de la cita
  reiniciarCitaObj();

  // Reiniciar el formulario
  formulario.reset();
};
