class Pacientes {

  // Constructor
  constructor() {
    this.pacientes = [];
  }

  // Agregar cita
  agregarPaciente(paciente) {
    this.pacientes = [...this.pacientes, paciente];
  }
};

export default Pacientes;