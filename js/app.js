// Variables
const paciente = document.querySelector('#paciente');
const propietario = document.querySelector('#propietario');
const email = document.querySelector('#email');
const fecha = document.querySelector('#fecha');
const sintomas = document.querySelector('#sintomas');
const formulario = document.querySelector('#formulario-cita');

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
    console.log(this.citas);
  }
}


let notificacion = new Notificacion();;
const cita = new Cita();

// Llenar datos de la cita
const llenarDatosCitaObj = (e) => {
  citaObj[e.target.name] = e.target.value.trim();
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