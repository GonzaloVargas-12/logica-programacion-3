// Pruebas del programa de factorial. Ejecutar con: node test.js
const { validarEntrada, factorial } = require("./factorial.js");

let fallas = 0;
function probar(descripcion, obtenido, esperado) {
  const ok = obtenido === esperado;
  if (!ok) fallas++;
  console.log(`${ok ? "✔" : "✘"} ${descripcion} → ${obtenido}${ok ? "" : ` (esperado: ${esperado})`}`);
}

console.log("Factorial:");
probar("5!", factorial(5).toString(), "120");
probar("6!", factorial(6).toString(), "720");
probar("0!", factorial(0).toString(), "1");
probar("1!", factorial(1).toString(), "1");
probar("10!", factorial(10).toString(), "3628800");
probar("20!", factorial(20).toString(), "2432902008176640000");
probar("25!", factorial(25).toString(), "15511210043330985984000000");

console.log("\nValidación de entradas:");
probar('"5" es válido', validarEntrada("5").ok, true);
probar('" 6 " es válido', validarEntrada(" 6 ").ok, true);
probar('"hola" es inválido', validarEntrada("hola").ok, false);
probar('"" es inválido', validarEntrada("").ok, false);
probar('"-3" es inválido', validarEntrada("-3").ok, false);
probar('"4.5" es inválido', validarEntrada("4.5").ok, false);
probar('"12abc" es inválido', validarEntrada("12abc").ok, false);

console.log(fallas === 0 ? "\nTodas las pruebas pasaron." : `\n${fallas} prueba(s) fallaron.`);
process.exit(fallas === 0 ? 0 : 1);