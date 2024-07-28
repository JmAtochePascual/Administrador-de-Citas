import { pacientes } from "./app.js";
import { contenedorCitasHtml, formularioHtml } from "./selectores.js";

// Variables
const pacienteObj = {
  paciente: '',
  propietario: '',
  email: '',
  fecha: '',
  sintomas: ''
};

// llenar datos al objeto cita
const llenarDatosObjCita = (event) => {
  pacienteObj[event.target.name] = event.target.value.trim();
}

// Verificar datos del objeto cita
const verificarDatosObjCita = () => Object.values(pacienteObj).every(valor => valor.trim() !== '');

// Mostrar alerta
const mostrarAlerta = (mensaje, tipo) => {

  // Si hay una alerta previa, no crear otra
  const alertaPrevia = document.querySelector('.alerta');
  if (alertaPrevia) return;

  // Crear alerta
  const alerta = document.createElement('p');
  alerta.textContent = mensaje;
  alerta.className = `text-center p-2 text-white font-bold uppercase alerta ${tipo ? 'bg-green-500' : 'bg-red-500'}`;

  // Insertar alerta en el formulario
  formularioHtml.parentElement.insertBefore(alerta, formularioHtml);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
}

// Validar email
const validarEmail = () => {
  const expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return expresion.test(pacienteObj.email);
}

// Generar un id 
const generarId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

// Reiniciar objeto paciente
const reiniciarObjPaciente = () => {
  pacienteObj.paciente = '';
  pacienteObj.propietario = '';
  pacienteObj.email = '';
  pacienteObj.fecha = '';
  pacienteObj.sintomas = '';
}

// Listar pacientes
const listarPacientes = () => {

  // Limpiar HTML
  limpiarHTML();

  pacientes.pacientes.forEach(objetoPaciente => {
    const { paciente, propietario, email, fecha, sintomas, id } = objetoPaciente;

    // Crear un div por cada cita
    const divCita = document.createElement('div');
    divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl', 'p-3');

    // Crear el paciente
    const pacienteHtml = document.createElement('p');
    pacienteHtml.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    pacienteHtml.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${paciente}`;

    // Crear el propietario
    const propietarioHtml = document.createElement('p');
    propietarioHtml.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    propietarioHtml.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${propietario}`;

    // Crear el email
    const emailHtml = document.createElement('p');
    emailHtml.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    emailHtml.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${email}`;

    // Crear la fecha
    const fechaHtml = document.createElement('p');
    fechaHtml.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    fechaHtml.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${fecha}`;

    // Crear el sintoma
    const sintomasHtml = document.createElement('p');
    sintomasHtml.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    sintomasHtml.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${sintomas}`;

    // const btnEditar = document.createElement('button');
    // btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
    // btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
    // btnEditar.onclick = () => editarCita(cita);

    // const btnEliminar = document.createElement('button');
    // btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
    // btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
    // btnEliminar.onclick = () => eliminarCita(cita.id);

    // const contenedorBotoes = document.createElement('div');
    // contenedorBotoes.classList.add('flex', 'justify-between', 'mt-10');

    // contenedorBotoes.appendChild(btnEditar);
    // contenedorBotoes.appendChild(btnEliminar);

    // Agregar al HTML
    divCita.appendChild(pacienteHtml);
    divCita.appendChild(propietarioHtml);
    divCita.appendChild(emailHtml);
    divCita.appendChild(fechaHtml);
    divCita.appendChild(sintomasHtml);
    // divCita.appendChild(contenedorBotoes);

    contenedorCitasHtml.appendChild(divCita);
  });
}

// Limpiar HTML
const limpiarHTML = () => {
  while (contenedorCitasHtml.firstChild) {
    contenedorCitasHtml.removeChild(contenedorCitasHtml.firstChild);
  }
}

export {
  llenarDatosObjCita,
  verificarDatosObjCita,
  mostrarAlerta,
  validarEmail,
  generarId,
  reiniciarObjPaciente,
  listarPacientes,
  pacienteObj
}