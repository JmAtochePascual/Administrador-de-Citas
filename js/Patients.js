class Patients {

  constructor() {
    this.patients = JSON.parse(localStorage.getItem('patients')) || [];
  };

  addPatient(patient) {
    this.patients = [...this.patients, patient];
  };

  deletePatient(id) {
    this.patients = this.patients.filter(patient => patient.id !== id);
  };

  updatePatient(patientUpdated) {
    this.patients = this.patients.map(patient => patient.id === patientUpdated.id ? patientUpdated : patient);
  };
};

export default Patients;