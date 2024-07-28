class Pacientes {

  // Constructor
  constructor() {
    this.pacientes = [];
  }

  // Agregar cita
  agregarPaciente(paciente) {
    this.pacientes = [...this.citas, paciente];
  }
};

export default Pacientes;