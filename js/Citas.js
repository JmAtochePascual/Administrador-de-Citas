class Citas {

  // Constructor
  constructor() {
    this.citas = [];
  }

  // Agregar cita
  agregarCita(cita) {
    this.citas = [...this.citas, cita];
  }
};

export default Citas;