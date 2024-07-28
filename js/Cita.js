import { generarId } from "./funciones.js";

class Cita {

  // Constructor
  constructor({ paciente, propietario, email, fecha, sintomas }) {
    this.paciente = paciente;
    this.propietario = propietario;
    this.email = email;
    this.fecha = fecha;
    this.sintomas = sintomas;
    this.id = generarId();
  }

};

export default Cita;