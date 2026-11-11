# 📝 Ejercicio Práctico: Mis Tareas del Curso

¡Hola! En este ejercicio vas a darle **diseño (CSS)** e **interactividad (JavaScript)** a una aplicación web sencilla para organizar tareas de estudio.

La buena noticia es que **toda la estructura HTML ya está terminada** y el archivo CSS ya trae las bases configuradas. Tu trabajo será completar los estilos pendientes y programar la lógica para que la aplicación funcione de verdad.

---

## ⬇️ Cómo descargar este proyecto

Tienes dos formas de tener este proyecto en tu computador:

### Opción 1: Descarga directa en ZIP (sin usar terminal)
1. Entra al repositorio en GitHub: https://github.com/lobocrea357/ejercicio-full-stack
2. Haz clic en el botón verde **`<> Code`** (arriba a la derecha de la lista de archivos).
3. Selecciona **`Download ZIP`**.
4. Descomprime el archivo `.zip` que se descargó en tu computador.
5. Abre la carpeta descomprimida en **Visual Studio Code** (o tu editor favorito).

### Opción 2: Clonado con Git (usando terminal)
1. Abre tu terminal (o la terminal integrada de VS Code) en la carpeta donde quieras guardar el proyecto.
2. Ejecuta el siguiente comando:
   ```bash
   git clone https://github.com/lobocrea357/ejercicio-full-stack.git
   ```
3. Entra a la carpeta del proyecto:
   ```bash
   cd ejercicio-full-stack
   ```
4. Ábrelo en VS Code (si tienes el comando configurado) con:
   ```bash
   code .
   ```

---

## 📁 Archivos del proyecto

| Archivo | Estado | ¿Qué debes hacer aquí? |
| :--- | :--- | :--- |
| `index.html` | ✅ Completo | **No necesitas modificarlo.** Léelo para conocer los `id` y `class` disponibles. |
| `styles.css` | 🟡 Con base lista | Completar los estilos pendientes usando **Flexbox** y colores directos. |
| `app.js` | 🟡 Guía inicial | Programar toda la interactividad paso a paso con JavaScript. |
| `README.md` | 📖 Guía | Seguir esta lista de tareas pendientes e ir marcando tu progreso. |

---

## 📏 Reglas importantes para mantenerlo simple

1. **No modifiques `index.html`** (ya tiene todas las etiquetas, clases, IDs y 3 tareas de ejemplo para que puedas ver tus cambios en CSS desde el minuto uno).
2. **Sin variables en CSS:** escribe los colores y tamaños directamente (ejemplo: `#2563eb`, `16px`). No uses `--nombre` ni `var()`.
3. **Sin CSS Grid:** para acomodar elementos en fila o columna usa **Flexbox** (`display: flex`).
4. **JavaScript puro (Vanilla JS):** no uses librerías ni frameworks externos.

---

## 🎨 Parte 1: Pendientes en CSS (`styles.css`)

Abre `index.html` en tu navegador (puedes hacer doble clic sobre el archivo o usar *Live Server*). Verás que el encabezado ya tiene estilo, pero el resto necesita tu ayuda.

Ve al archivo `styles.css` y completa cada sección marcada con `TODO`:

- [ ] **TODO 1 — Tarjetas de resumen (`.resumen`, `.tarjeta-resumen`, `.numero`, `.etiqueta`)**
  - Coloca las 3 tarjetas de resumen una al lado de la otra con `display: flex` y `gap: 16px`.
  - Haz que cada tarjeta tenga el mismo ancho con `flex: 1`, fondo blanco (`#ffffff`), bordes redondeados (`border-radius`) y espacio interior (`padding`).
  - Centra el texto y haz que `.numero` se vea grande (por ejemplo `28px`) y en negrita, y `.etiqueta` más pequeña en color gris.
  - *Pista:* para que `.numero` y `.etiqueta` queden uno arriba del otro, puedes poner `display: block` en ambos o usar `flex-direction: column`.

- [ ] **TODO 2 — Panel del formulario (`.panel-formulario`, `.formulario`, `.campo`, `.btn-agregar`, `.mensaje-error`)**
  - Dale al panel fondo blanco, bordes redondeados, `padding` y separación inferior (`margin-bottom`).
  - Ordena el `.formulario` en fila con `display: flex`, `gap: 12px` y `align-items: flex-end` para que el botón quede alineado abajo con los campos. Usa `flex-wrap: wrap` para que no se desborde en pantallas pequeñas.
  - Haz que cada `.campo` acomode su `<label>` arriba del `<input>` o `<select>` (`display: flex; flex-direction: column; gap: 6px;`).
  - Dale estilo a los `input`, `select` (borde suave, `padding`, `border-radius`) y al botón `.btn-agregar` (color de fondo azul, texto blanco, sin borde, `cursor: pointer`).
  - Agrega un efecto `:hover` al botón `.btn-agregar` cambiando ligeramente su color de fondo.
  - Estila `.mensaje-error` con texto rojo y un poco de margen superior para cuando se muestre un error.

- [ ] **TODO 3 — Cabecera de la lista y filtros (`.panel-lista`, `.cabecera-lista`, `.filtros`, `.btn-filtro`, `.btn-filtro.activo`)**
  - Dale a `.panel-lista` fondo blanco, `padding` y bordes redondeados.
  - En `.cabecera-lista`, usa `display: flex` y `justify-content: space-between` para dejar el título a la izquierda y los botones de filtro a la derecha.
  - Estila los botones `.btn-filtro` con un diseño tipo píldora o botón suave (`border-radius`, borde sutil, fondo claro).
  - Crea la regla `.btn-filtro.activo` para que el filtro seleccionado destaque (por ejemplo, fondo azul y letra blanca).

- [ ] **TODO 4 — Tarjetas de cada tarea (`.lista-tareas`, `.tarea`, `.tarea-info`, `.tarea-texto`, `.tarea-acciones`)**
  - Quita los puntos de la lista en `.lista-tareas` con `list-style: none`.
  - A cada `.tarea` dale borde suave, bordes redondeados, `padding`, separación inferior (`margin-bottom`), y usa `display: flex` con `justify-content: space-between` y `align-items: center`.
  - En `.tarea-info`, usa `display: flex`, `align-items: center` y `gap: 12px` para alinear la etiqueta de prioridad junto al texto.
  - En `.tarea-acciones`, usa `display: flex` y `gap: 8px` para separar los botones.

- [ ] **TODO 5 — Etiquetas de prioridad (`.badge`, `.prioridad-alta`, `.prioridad-media`, `.prioridad-baja`)**
  - Estila `.badge` con `padding` pequeño (ej. `4px 10px`), `border-radius: 999px`, texto pequeño (`12px`) y en negrita.
  - Asigna un color distinto a cada nivel:
    - `.prioridad-alta`: fondo rojo claro y texto rojo oscuro.
    - `.prioridad-media`: fondo amarillo/naranja claro y texto oscuro.
    - `.prioridad-baja`: fondo verde claro y texto verde oscuro.

- [ ] **TODO 6 — Botones de acción (`.btn-completar`, `.btn-eliminar`)**
  - Dales un tamaño cómodo (`padding`), bordes redondeados, sin borde (`border: none`) y `cursor: pointer`.
  - Usa un color verde o azul para `.btn-completar` y rojo para `.btn-eliminar`.
  - Agrega `:hover` a ambos para dar retroalimentación visual al pasar el mouse.

- [ ] **TODO 7 — Estado completada y mensaje vacío (`.tarea.completada`, `.mensaje-vacio`)**
  - Cuando un `<li>` tenga las dos clases `.tarea.completada`, reduce su opacidad (ej. `opacity: 0.65`) y cambia el fondo a un gris muy suave.
  - Tacha el texto de la tarea completada con `.tarea.completada .tarea-texto { text-decoration: line-through; }`.
  - Centra y dale color gris al texto de `.mensaje-vacio`.

---

## ⚙️ Parte 2: Pendientes en JavaScript (`app.js`)

Cuando ya te guste cómo se ve tu página, abre `app.js` y la consola del navegador (`F12` → pestaña **Console**). Deberías ver el mensaje `"app.js conectado correctamente"`.

Ahora construye la lógica paso a paso:

- [ ] **Paso 1 — Seleccionar los elementos del DOM**
  - Guarda en variables (`const`) las referencias a:
    - `#formulario-tarea`
    - `#input-tarea`
    - `#select-prioridad`
    - `#lista-tareas`
    - `#mensaje-error`
    - `#mensaje-vacio`
    - `#total-tareas`, `#tareas-pendientes`, `#tareas-completadas`
    - Todos los botones `.btn-filtro` (con `document.querySelectorAll`).

- [ ] **Paso 2 — Crear la función `actualizarContadores()`**
  - Busca todas las tareas actuales en la lista (`document.querySelectorAll("#lista-tareas .tarea")`).
  - Cuenta cuántas tienen la clase `.completada` (`document.querySelectorAll("#lista-tareas .tarea.completada")`).
  - Calcula las pendientes (`total - completadas`).
  - Actualiza el `.textContent` de `#total-tareas`, `#tareas-pendientes` y `#tareas-completadas`.
  - *Tip:* llama a esta función cada vez que agregues, completes o elimines una tarea.

- [ ] **Paso 3 — Agregar una nueva tarea desde el formulario**
  - Escucha el evento `"submit"` de `#formulario-tarea`.
  - Detén la recarga de la página con `evento.preventDefault()`.
  - Lee el texto del input y limpia espacios sobrantes con `.trim()`.
  - **Validación:** si el texto está vacío (`texto === ""`), quita la clase `"oculto"` de `#mensaje-error` y detén la función con `return`. Si tiene texto, vuelve a agregar `"oculto"` a `#mensaje-error`.
  - Lee el valor seleccionado en `#select-prioridad` (`"alta"`, `"media"` o `"baja"`).
  - Crea un nuevo `<li>` con `document.createElement("li")`, ponle `className = "tarea"` y construye su contenido interno para que tenga **exactamente la misma estructura** que el HTML inicial:
    ```html
    <div class="tarea-info">
      <span class="badge prioridad-media">Media</span>
      <p class="tarea-texto">Tu texto aquí</p>
    </div>
    <div class="tarea-acciones">
      <button type="button" class="btn-completar">Completar</button>
      <button type="button" class="btn-eliminar">Eliminar</button>
    </div>
    ```
  - *(Consejo de seguridad: para evitar problemas si alguien escribe símbolos HTML en el input, es mejor asignar el texto usando `.textContent` en lugar de pegarlo directo dentro de `innerHTML`).*
  - Agrega el `<li>` al `#lista-tareas` con `appendChild()`.
  - Limpia el input (`inputTarea.value = ""`) y llama a `actualizarContadores()`.

- [ ] **Paso 4 — Marcar o desmarcar una tarea como completada**
  - Escucha el evento `"click"` sobre `#lista-tareas` (esto se llama *delegación de eventos* y sirve tanto para las 3 tareas iniciales como para las nuevas que agregues).
  - Verifica si el elemento donde hiciste clic tiene la clase `"btn-completar"` (`evento.target.classList.contains("btn-completar")`).
  - Encuentra el `<li>` contenedor usando `evento.target.closest(".tarea")`.
  - Alterna la clase `"completada"` con `tarea.classList.toggle("completada")`.
  - Cambia el texto del botón: si la tarea ahora tiene la clase `"completada"`, pon `"Deshacer"`; si no, `"Completar"`.
  - Llama a `actualizarContadores()`.

- [ ] **Paso 5 — Eliminar una tarea**
  - Dentro del mismo evento `"click"` de `#lista-tareas`, verifica si hiciste clic en `"btn-eliminar"`.
  - Busca el `<li>` padre con `.closest(".tarea")` y elimínalo con `.remove()`.
  - Llama a `actualizarContadores()`.

- [ ] **Paso 6 (Reto extra) — Hacer que funcionen los filtros y el mensaje vacío**
  - Recorre los botones `.btn-filtro` y agrega un `"click"` a cada uno.
  - Al hacer clic en un filtro:
    1. Quita la clase `"activo"` a todos los botones `.btn-filtro` y agrégasela solo al botón clicado.
    2. Lee su atributo `dataset.filtro` (`"todas"`, `"pendientes"` o `"completadas"`).
    3. Recorre todas las tareas (`.tarea`) y decide si mostrarlas u ocultarlas (puedes usar la clase `"oculto"`):
       - Si el filtro es `"todas"`: muestra todas.
       - Si es `"pendientes"`: muestra solo las que **no** tienen `.completada`.
       - Si es `"completadas"`: muestra solo las que **sí** tienen `.completada`.
  - Cuenta cuántas tareas quedaron visibles. Si el resultado es `0`, quita `"oculto"` de `#mensaje-vacio`; de lo contrario, ocúltalo.

---

## 💡 Consejos si te trabas

1. **Usa la consola del navegador (`F12`):** si algo no funciona en JS, revisa si aparece algún error en rojo y usa `console.log(...)` para ver qué contienen tus variables.
2. **Inspecciona elementos:** haz clic derecho sobre una tarjeta en el navegador → *Inspeccionar* para ver qué clases CSS tiene aplicadas en ese momento.
3. **Ve paso a paso:** no intentes escribir todo `app.js` de una vez. Prueba primero que el `submit` lea el texto, luego que cree el `<li>`, luego los botones, y al final los filtros.

¡Mucho éxito programando! 🚀
