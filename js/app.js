import Patients from "./Patients.js";

const dateContentElement = document.querySelector('#citas');
const dateElement = document.querySelector('#date');
const emailElement = document.querySelector('#email');
const formElement = document.querySelector('#formulario-cita');
const namePatientElement = document.querySelector('#namePatient');
const ownerNameElement = document.querySelector('#ownerName');
const symtomElement = document.querySelector('#symtom');
const patients = new Patients();
let isEditMode = false;
const patientObj = {
  date: '',
  email: '',
  namePatient: '',
  ownerName: '',
  symtom: '',
};

const startApp = (event) => {
  event.preventDefault();

  if (Object.values(patientObj).includes('')) {
    showAlert('Todos los campos son obligatorios', false);
    return;
  };

  if (isEditMode) {
    patients.updatePatient({ ...patientObj });
    showAlert('Paciente editado correctamente', true);
  } else {
    patients.addPatient({ ...patientObj, id: generateId() });
    showAlert('Paciente agregado correctamente', true);
  };

  showPatients();

  resetApp();
};

const setDataPatient = (event) => {
  patientObj[event.target.name] = event.target.value.trim();
};

const showAlert = (message, type) => {
  const hasAlert = document.querySelector('.alerta');

  if (hasAlert) return;

  const alertElement = document.createElement('p');
  alertElement.textContent = message;
  alertElement.className = `text-center p-2 text-white font-bold uppercase alerta ${type ? 'bg-green-500' : 'bg-red-500'}`;

  formElement.parentElement.insertBefore(alertElement, formElement);

  setTimeout(() => {
    alertElement.remove();
  }, 3000);
};

const generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

const updateLocalStorage = () => localStorage.setItem('patients', JSON.stringify(patients.patients));

const loadEditPatient = (patient) => {
  const { namePatient, ownerName, email, date, symtom, id } = patient;

  namePatientElement.value = namePatient;
  ownerNameElement.value = ownerName;
  emailElement.value = email;
  dateElement.value = date;
  symtomElement.value = symtom;

  patientObj.namePatient = namePatient;
  patientObj.ownerName = ownerName;
  patientObj.email = email;
  patientObj.date = date;
  patientObj.symtom = symtom;
  patientObj.id = id;

  isEditMode = true;

  formElement.querySelector('input[type="submit"]').value = 'Guardar Cambios';
};

const showPatients = () => {
  clearHtml();

  patients.patients.forEach(patient => {
    const { namePatient, ownerName, email, date, symtom, id } = patient;

    const divDate = document.createElement('div');
    divDate.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl', 'p-3');

    const namePatientHtml = document.createElement('p');
    namePatientHtml.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    namePatientHtml.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${namePatient}`;

    const ownerNameHtml = document.createElement('p');
    ownerNameHtml.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    ownerNameHtml.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${ownerName}`;

    const emailHtml = document.createElement('p');
    emailHtml.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    emailHtml.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${email}`;

    const dateHtml = document.createElement('p');
    dateHtml.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    dateHtml.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${date}`;

    const symtomHtml = document.createElement('p');
    symtomHtml.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    symtomHtml.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${symtom}`;

    const editButton = document.createElement('button');
    editButton.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
    editButton.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
    editButton.onclick = () => {
      loadEditPatient(patient);
    };

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
    deleteButton.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
    deleteButton.onclick = () => {
      patients.deletePatient(id);
      showPatients();
    };

    const contenedorBotoes = document.createElement('div');
    contenedorBotoes.classList.add('flex', 'justify-between', 'mt-10');

    contenedorBotoes.appendChild(editButton);
    contenedorBotoes.appendChild(deleteButton);

    divDate.appendChild(namePatientHtml);
    divDate.appendChild(ownerNameHtml);
    divDate.appendChild(emailHtml);
    divDate.appendChild(dateHtml);
    divDate.appendChild(symtomHtml);
    divDate.appendChild(contenedorBotoes);
    dateContentElement.appendChild(divDate);
  });

  updateLocalStorage();
};

const resetApp = () => {
  patientObj.date = '';
  patientObj.email = '';
  patientObj.namePatient = '';
  patientObj.ownerName = '';
  patientObj.symtom = '';

  if (patientObj.id) delete patientObj.id

  formElement.reset();
  namePatientElement.focus();
  isEditMode = false;

  formElement.querySelector('input[type="submit"]').value = 'Registrar Paciente';
};

const clearHtml = () => {
  while (dateContentElement.firstChild) {
    dateContentElement.removeChild(dateContentElement.firstChild);
  };
};

document.addEventListener('DOMContentLoaded', () => {
  showPatients();

  namePatientElement.addEventListener('change', setDataPatient);
  ownerNameElement.addEventListener('change', setDataPatient);
  emailElement.addEventListener('change', setDataPatient);
  dateElement.addEventListener('change', setDataPatient);
  symtomElement.addEventListener('change', setDataPatient);
  formElement.addEventListener('submit', startApp);
});