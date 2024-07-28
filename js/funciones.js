// Variables
const citaObj = {
  paciente: '',
  propietario: '',
  email: '',
  fecha: '',
  sintomas: ''
};

// llenar datos al objeto cita
const llenarDatosObjCita = (event) => {
  citaObj[event.target.name] = event.target.value.trim();
}


// Verificar datos del objeto cita
const verificarDatosObjCita = () => Object.values(citaObj).every(valor => valor.trim() !== '');

export {
  llenarDatosObjCita,
  verificarDatosObjCita
}