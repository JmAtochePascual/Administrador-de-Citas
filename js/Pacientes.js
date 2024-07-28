class Pacientes {

  // Constructor
  constructor() {
    this.pacientes = [];
  }

  // Agregar cita
  agregarPaciente(paciente) {
    this.pacientes = [...this.pacientes, paciente];
  }

  // Eliminar paciente
  eliminarPaciente(id) {
    this.pacientes = this.pacientes.filter(paciente => paciente.id !== id);
  }
};

export default Pacientes;