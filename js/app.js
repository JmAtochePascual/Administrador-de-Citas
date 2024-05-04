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


// Llenar datos de la cita
const llenarDatosCitaObj = (e) => {
  citaObj[e.target.name] = e.target.value.trim();
};


// Inica la app
const init = (event) => {
  event.preventDefault();

  if (Object.values(citaObj).includes('')) {
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