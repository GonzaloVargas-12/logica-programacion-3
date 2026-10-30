function validarEntrada(entrada) {
  if (entrada === null || entrada.trim() === "") {
    return { ok: false, error: "No ingresaste ningún dato." };
  }

  const numero = Number(entrada);

  if (typeof numero !== "number" || Number.isNaN(numero)) {
    return { ok: false, error: `"${entrada}" no es un número.` };
  }
  if (!Number.isInteger(numero)) {
    return { ok: false, error: "El factorial solo existe para números enteros." };
  }
  if (numero < 0) {
    return { ok: false, error: "El factorial no está definido para números negativos." };
  }

  return { ok: true, valor: numero };
}

/**
 * Calcula n! de forma iterativa.
 * Se usa BigInt para que el resultado sea exacto incluso con números grandes.
 */
function factorial(n) {
  let resultado = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    resultado *= i;
  }
  return resultado;
}

/**
 * Pide el número con prompt() hasta que el dato sea válido.
 * Si el usuario presiona "Cancelar", devuelve null.
 */
function solicitarNumero() {
  while (true) {
    const entrada = prompt("Ingresa un número entero positivo para calcular su factorial:");

    if (entrada === null) return null; // el usuario canceló

    const validacion = validarEntrada(entrada);
    if (validacion.ok) return validacion.valor;

    console.error("Error:", validacion.error);
    alert(`Error: ${validacion.error}\nIntenta de nuevo.`);
  }
}

function mostrarResultado(n, resultado) {
  const mensaje = `El factorial de ${n} es ${resultado}.`;
  console.log(mensaje);

  const salida = document.getElementById("resultado");
  if (salida) salida.textContent = mensaje;
}

function iniciar() {
  const n = solicitarNumero();
  if (n === null) {
    console.log("Operación cancelada por el usuario.");
    const salida = document.getElementById("resultado");
    if (salida) salida.textContent = "Operación cancelada.";
    return;
  }
  mostrarResultado(n, factorial(n));
}

// En el navegador: arranca al cargar la página y con el botón.
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calcular").addEventListener("click", iniciar);
    iniciar();
  });
}

// En Node: exporta las funciones para poder probarlas.
if (typeof module !== "undefined") {
  module.exports = { validarEntrada, factorial };
}