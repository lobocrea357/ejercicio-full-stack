// =========================================================
// LÓGICA JAVASCRIPT - MIS TAREAS DEL CURSO
// Sigue los pasos del README.md en orden para ir probando cada función.
// =========================================================

console.log("app.js conectado correctamente");

// PASO 1: Seleccionar los elementos del HTML que vas a necesitar
// Pista: usa document.getElementById("...") o document.querySelectorAll("...")
// - formulario: #formulario-tarea
// - input de texto: #input-tarea
// - select de prioridad: #select-prioridad
// - lista de tareas (ul): #lista-tareas
// - mensaje de error: #mensaje-error
// - mensaje vacío: #mensaje-vacio
// - contadores: #total-tareas, #tareas-pendientes, #tareas-completadas
// - botones de filtro: .btn-filtro


// PASO 2: Crear una función actualizarContadores()
// - Cuenta cuántas tareas hay en total (.tarea)
// - Cuenta cuántas tienen la clase .completada
// - Calcula las pendientes (total - completadas)
// - Actualiza el texto (textContent) de los 3 contadores en el HTML


// PASO 3: Escuchar el evento "submit" del formulario para agregar tareas
// - Usa evento.preventDefault() para que la página no se recargue
// - Obtén el texto del input (usa .trim() para quitar espacios vacíos)
// - Si está vacío, quita la clase "oculto" de #mensaje-error y sal de la función (return)
// - Si tiene texto, agrega la clase "oculto" a #mensaje-error
// - Crea un nuevo elemento <li> con la misma estructura HTML que las tareas de ejemplo
// - Agrégalo dentro de #lista-tareas (por ejemplo con appendChild)
// - Limpia el input y llama a actualizarContadores()


// PASO 4 y PASO 5: Completar y eliminar tareas
// Pista: puedes usar "delegación de eventos" escuchando el clic en #lista-tareas
// y preguntando qué botón fue presionado:
// - Si evento.target.classList.contains("btn-completar"):
//     busca el <li> padre con .closest(".tarea"),
//     alterna la clase "completada" con classList.toggle("completada"),
//     cambia el texto del botón entre "Completar" y "Deshacer",
//     y llama a actualizarContadores()
// - Si evento.target.classList.contains("btn-eliminar"):
//     busca el <li> padre con .closest(".tarea"),
//     elimínalo con .remove(),
//     y llama a actualizarContadores()


// PASO 6 (RETO EXTRA): Filtros ("Todas", "Pendientes", "Completadas") y mensaje vacío
// - Al hacer clic en un botón .btn-filtro:
//     quita la clase "activo" de todos los botones de filtro y pónsela al botón clicado.
//     recorre todas las tareas (.tarea) y muéstralas u ocúltalas según su data-filtro.
// - Si no queda ninguna tarea visible en la vista actual, muestra #mensaje-vacio.
