// Definir la variable random_number
let random_number = Math.floor(Math.random() * quick_draw_data_set.length);

// Obtener y mostrar el nombre aleatorio del dibujo
console.log(quick_draw_data_set[random_number]);

// Actualizar el texto de la etiqueta span con el id 'draw'
let dibujo = quick_draw_data_set[random_number];
document.getElementById('draw').innerHTML = `Dibujo a realizar: ${dibujo}`;

// Definir variables para el contador de tiempo y otras funcionalidades
let timer_counter = 0;
let timer_check = '';
let drawn_sketch = '';
let answer_holder = '';
let score = 0;
