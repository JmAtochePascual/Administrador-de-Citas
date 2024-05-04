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

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
    this.mostrarCita();
  }

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

      // Agregar al HTML
      divCita.appendChild(paciente);
      divCita.appendChild(propietario);
      divCita.appendChild(email);
      divCita.appendChild(fecha);
      divCita.appendChild(sintomas);
      contenedorCitas.appendChild(divCita);
    });
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


// Inica la app
const init = (event) => {
  event.preventDefault();

  // Valida si hay campos vacios
  if (Object.values(citaObj).includes('')) {
    notificacion.mostrarNotificacion('Todos los campos son obligatorios', false);
    return;
  };

  // Agrega la cita al arreglo de citas
  cita.agregarCita({ ...citaObj });

  // Muestra notificacion de exito
  notificacion.mostrarNotificacion('Cita creada correctamente');

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