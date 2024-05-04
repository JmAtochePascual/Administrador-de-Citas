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

//  Clases
class Notificacion {
  constructor({ mensaje, tipo = true }) {
    this.mensaje = mensaje;
    this.tipo = tipo;
  }

  mostrarNotificacion() {
    const existeAlerta = document.querySelector('.alert');

    if (!existeAlerta) {
      const alerta = document.createElement('div');
      alerta.textContent = this.mensaje;
      alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'uppercase', 'font-bold', 'text-sm', 'alert');

      this.tipo
        ? alerta.classList.add('bg-green-500')
        : alerta.classList.add('bg-red-500');

      formulario.parentElement.insertBefore(alerta, formulario);

      setTimeout(() => {
        alerta.remove();
      }, 3000);
    }
  }
}

let notificacion;


// Llenar datos de la cita
const llenarDatosCitaObj = (e) => {
  citaObj[e.target.name] = e.target.value.trim();
};


// Inica la app
const init = (event) => {
  event.preventDefault();

  if (Object.values(citaObj).includes('')) {
    notificacion = new Notificacion({ mensaje: 'Todos los campos son obligatorios', tipo: false });
    notificacion.mostrarNotificacion();
    return;
  };

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