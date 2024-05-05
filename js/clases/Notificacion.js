// Importaciones
import { formulario } from "../selectores.js";

class Notificacion {
  constructor() {
  }

  mostrarNotificacion(mensaje, tipo = true) {
    const existeAlerta = document.querySelector('.alert');

    if (!existeAlerta) {
      const alerta = document.createElement('div');
      alerta.textContent = mensaje;
      alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'uppercase', 'font-bold', 'text-sm', 'alert');

      tipo
        ? alerta.classList.add('bg-green-500')
        : alerta.classList.add('bg-red-500');

      formulario.parentElement.insertBefore(alerta, formulario);

      setTimeout(() => {
        alerta.remove();
      }, 3000);
    }
  }
};

export default Notificacion;