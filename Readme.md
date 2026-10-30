# Lógica de programación 3 — Factorial

Programa en JavaScript que:

1. Solicita un número al usuario mediante `prompt`.
2. Verifica que el dato sea de tipo `number` (y además entero y no negativo). Si no lo es, muestra un mensaje de error y vuelve a pedirlo.
3. Calcula el factorial del número.
4. Imprime el resultado en la consola y en la página (DOM).

## Cómo usarlo

Abre `index.html` en el navegador. Aparecerá un cuadro de diálogo para escribir el número; el resultado se ve en la página y en la consola (F12). El botón **Calcular otro número** permite repetir.

## Ejemplos

| Entrada | Salida |
|---------|--------|
| 5       | 120    |
| 6       | 720    |
| 0       | 1      |
| 10      | 3628800 |
| hola    | Error: "hola" no es un número. (vuelve a pedir el dato) |

El cálculo usa `BigInt`, así que los resultados son exactos incluso con números grandes (por ejemplo 25! = 15511210043330985984000000).

## Pruebas

```bash
node test.js
```

## Archivos

- `index.html` — página que carga el programa.
- `factorial.js` — lógica: validación, cálculo y salida.
- `test.js` — pruebas automáticas con Node.