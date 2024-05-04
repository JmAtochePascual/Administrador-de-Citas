// Variables
const paciente = document.querySelector('#paciente');
const propietario = document.querySelector('#propietario');
const email = document.querySelector('#email');
const fecha = document.querySelector('#fecha');
const sintomas = document.querySelector('#sintomas');
const formulario = document.querySelector('#formulario-cita');
const contenedorCitas = document.querySelector('#citas');

const citaObj = {
  paciente: '',
  propietario: '',
  email: '',
  fecha: '',
  sintomas: ''
};

let editar = false;

//  Clase de notificaciones
class Notificacion {
  constructor() {
  }

  mostrarNotificacion(mensaje, tipo = true) {
    const existeAlerta = document.querySelector('.alert');

    if (!existeAlerta) {
      const alerta = document.createElement('div');
      alerta.textContent = mensaje;
      alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'uppercase', 'font-bold', 'text-sm', 'alert');

      tipo
        ? alerta.classList.add('bg-green-500')
        : alerta.classList.add('bg-red-500');

      formulario.parentElement.insertBefore(alerta, formulario);

      setTimeout(() => {
        alerta.remove();
      }, 3000);
    }
  }
}

// Clase de citas
class Cita {

  constructor() {
    this.citas = [];
  }

  // Agregar cita al arreglo de citas
  agregarCita(cita) {
    cita.id = Date.now() + Math.random().toString(36).substring(2);

    this.citas = [...this.citas, cita];
    this.mostrarCita();
  }

  // Mostrar citas en el HTML
  mostrarCita() {
    // Limpiar el html previo
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }

    this.citas.forEach(cita => {
      const divCita = document.createElement('div');
      divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl', 'p-3');

      const paciente = document.createElement('p');
      paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
      paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

      const propietario = document.createElement('p');
      propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
      propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

      const email = document.createElement('p');
      email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
      email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

      const fecha = document.createElement('p');
      fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
      fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

      const sintomas = document.createElement('p');
      sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
      sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

      const btnEditar = document.createElement('button');
      btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
      btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
      btnEditar.onclick = () => editarCita(cita);

      const btnEliminar = document.createElement('button');
      btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
      btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      btnEliminar.onclick = () => eliminarCita(cita.id);

      const contenedorBotoes = document.createElement('div');
      contenedorBotoes.classList.add('flex', 'justify-between', 'mt-10');

      contenedorBotoes.appendChild(btnEditar);
      contenedorBotoes.appendChild(btnEliminar);

      // Agregar al HTML
      divCita.appendChild(paciente);
      divCita.appendChild(propietario);
      divCita.appendChild(email);
      divCita.appendChild(fecha);
      divCita.appendChild(sintomas);
      divCita.appendChild(contenedorBotoes);

      contenedorCitas.appendChild(divCita);
    });
  }

  // Editar cita del arreglo de citas
  editarCita(cita) {
    this.citas = this.citas.map(citaItem => citaItem.id === cita.id ? cita : citaItem);
    this.mostrarCita();
  }

  // Eliminar cita del arreglo de citas
  eliminarCita(id) {
    this.citas = this.citas.filter(cita => cita.id !== id);
    this.mostrarCita();
  }

}


let notificacion = new Notificacion();;
const cita = new Cita();


// Llenar datos de la cita
const llenarDatosCitaObj = (e) => {
  citaObj[e.target.name] = e.target.value.trim();
};


// Reiniciar el objeto de la cita
const reiniciarCitaObj = () => {
  Object.assign(citaObj, {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
  });
};


// Editar cita
const editarCita = (citaMemory) => {
  paciente.value = citaMemory.paciente;
  propietario.value = citaMemory.propietario;
  email.value = citaMemory.email;
  fecha.value = citaMemory.fecha;
  sintomas.value = citaMemory.sintomas;
  citaObj.id = citaMemory.id;

  Object.assign(citaObj, citaMemory);
  editar = true;

  formulario.querySelector('input[type="submit"]').value = 'Guardar Cambios';
}


// Eliminar cita
const eliminarCita = (id) => {
  cita.eliminarCita(id);
}


// Inica la app
const init = (event) => {
  event.preventDefault();

  // Valida si hay campos vacios
  if (Object.values(citaObj).includes('')) {
    notificacion.mostrarNotificacion('Todos los campos son obligatorios', false);
    return;
  };

  if (editar) {

    cita.editarCita({ ...citaObj });

    // Muestra notificacion de exito
    notificacion.mostrarNotificacion('Cita actualizada correctamente');

    // Cambiar el texto del boton
    formulario.querySelector('input[type="submit"]').value = 'Registrar Paciente';

    // Cambiar el modo de edicion
    editar = false;
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

// Cargar eventos
document.addEventListener('DOMContentLoaded', () => {
  paciente.addEventListener('change', llenarDatosCitaObj);
  propietario.addEventListener('change', llenarDatosCitaObj);
  email.addEventListener('change', llenarDatosCitaObj);
  fecha.addEventListener('change', llenarDatosCitaObj);
  sintomas.addEventListener('change', llenarDatosCitaObj);
  formulario.addEventListener('submit', init);
});