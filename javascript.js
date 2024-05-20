//Para que parezca que Jerry empieza a caer al hacer scroll//
document.addEventListener("DOMContentLoaded", function() { //"DOMContentLoaded" permite implementar elemento dinámicos y diseño receptivo, garantizando que la funcionalidad de la página estén disponibles antes de que se carguen//
    var gifs = ["Gif/JerrySaltando.gif", "Gif/Jerry.gif"]; // Acá están las rutas para los gifs.
    var gifElement = document.getElementById("gif");
    var lastScrollTop = 0; // Variable para almacenar la posición de desplazamiento anterior, con esto se detecta cuando se inicia el scroll

    function changeGif(index) { //Esta función sirve para cambiar un GIF por otro en una página.
        gifElement.src = gifs[index]; //Acá se encuentra la "ruta" del segundo GIF, es un cambio basado en el índice
    }

    function scrollHandler() { //Esta función detecta la dirección vertical del Scroll y cambia la imagen
        var scrollTop = window.scrollY // Posición actual del scroll
        var scrollingDown = scrollTop > lastScrollTop; // Verifica si se está haciendo scroll hacia abajo, al comparar el scroll actual con el anterior
            //Si scrollTop es mayor que lastScrollTop, quiere decir que el usuario está bajando.
        if (scrollTop === 0 || (!scrollingDown && lastScrollTop !== 0)) {
            // Si estamos arriba de la página o usuario hizo scroll hacia abajo
            changeGif(0); // Mostrar el Gif de Jerry Saltando
        } else if (scrollingDown && lastScrollTop !== 0) {
            // Si el usuario está subiendo el scroll
            changeGif(1); // Mostrar el otro GIF
        }

        lastScrollTop = scrollTop; // Actualizar la posición de desplazamiento anterior, para la siguiente vez que se compare
    }

    // Agregar un event listener para detectar el scroll y que funcione scrollHandler
    window.addEventListener("scroll", scrollHandler);
});

// Para hacer más fácil la interacción del usuario con la página y cada una de las secciones de INTRODUCCIÓN
// Lo mismo va a aplicar para HISTORIA, pero se va a ver un poco distinto por el estilo.
const enlaces = document.querySelectorAll('a[data-seccion]'); //Data-seccion almacena el índice de la sección a la que debe ir cada enlace, sin el, solo funciona el enlace respectivo a la sección que se muestra
const secciones = document.querySelectorAll('.seccion');
const btnArriba = document.getElementById('btn-arriba');
const btnAbajo = document.getElementById('btn-abajo');

let seccionActual = 0;

btnArriba.addEventListener('click', () => { //Es para poder moverse entre las secciones
    if (seccionActual > 0) {
        seccionActual--;
        mostrarSeccion(seccionActual);
    }
});

btnAbajo.addEventListener('click', () => { //Es para poder moverse entre las secciones
    if (seccionActual < secciones.length - 1) {
        seccionActual++;
        mostrarSeccion(seccionActual);
    }
});

function mostrarSeccion(indice) { //La funcion para poder mostrar la seccion respectiva
    secciones.forEach((seccion, i) => {
        seccion.style.display = i === indice ? 'block' : 'none';
    });
}

mostrarSeccion(seccionActual); // Mostrar la sección inicial

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (evento) => {
        evento.preventDefault(); // Prevenir el comportamiento predeterminado
        const indiceSeccion = parseInt(enlace.getAttribute('data-seccion'));
        seccionActual = indiceSeccion;
        mostrarSeccion(seccionActual);
    });
});

//Como la página "Actividades" tiene tanta información decidí usar javascript para que se muestre de una forma distinta
// Función para mostrar una sección (También para "Historia")
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block"; // Si está oculta, la mostramos
    } else {
        section.style.display = "none"; // Si está visible, la ocultamos
    }
}


const botonesToggle = document.querySelectorAll('.toggle-btn');
botonesToggle.forEach(boton => {
    boton.addEventListener('click', () => {
        alternarBoton(boton);
    });
});
function alternarBoton(boton) {
    boton.classList.toggle('activo');
}

//Código para el mapa interactivo
function Beth(){
    document.getElementById('info').innerHTML='<img class="ImgM" src="Imagenes/Beth Smith.jpg" alt="Beth Smith"><br><span><strong>Beth Smith</strong></span></br><br><p class="Personaje">Beth es una veterinaria que se especializa en cirugía de caballos, que se ve afectada por una profunda sensación de insatisfacción con su vida, derivada de su creencia de que se ha «estancado» en su matrimonio, familia y trabajo, llevándola a aceptar a su padre en su hogar después de que él la abandonó cuando era adolescente. Conocida por su personalidad egoísta y humorística, alcoholismo y abrasividad cuando es criticada, el personaje ha sido bien recibido. Es la hija sensata y asertiva del científico loco Rick Sánchez, madre de Morty y Summer Smith, esposa de Jerry Smith y abuela de Naruto y Morty Smith Jr</p></br>';
    document.getElementById('info').scrollIntoView()
}
function Summer(){
    document.getElementById('info').innerHTML='<img class="ImgM" src="Imagenes/Summer Smith.jpg" alt="Summer Smith"><br><span><strong>Summer Smith</strong></span></br><br><p class="Personaje">Summer tiene 17 años y estudia en la escuela secundaria Harry Herpson junto con su hermano menor Morty. De vez en cuando expresa celos de que Morty acompañe a Rick en sus aventuras interdimensionales, a quien ella ve como un héroe, aunque él a menudo se muestra despectivo y desdeñoso con la perspectiva y los valores de su vida adolescente. A medida que avanza la serie, Summer comienza a acompañar a Rick y Morty en sus aventuras y se le confía la tarea de restaurar sus recuerdos en el escenario en el que la pareja queda amnésica.</p></br>';
    document.getElementById('info').scrollIntoView()
    }
function Morty(){
    document.getElementById('info').innerHTML='<img class="ImgM" src="Imagenes/Morty Smith2.jpg" alt="Morty Smith"><br><span><strong>Morty Smith</strong></span></br><br><p class="Personaje">Morty tiene 14 años y es un estudiante del instituto Harry Herpson, junto con su hermana mayor, Summer. Morty parece sufrir ansiedad y se estresa fácilmente, en gran parte a raíz de experiencias traumáticas durante sus aventuras con Rick. Es a menudo desestimado como idiota por Rick y otros, e incluso se duda de que tenga algún tipo de discapacidad, pero se le ve más sensato que su abuelo, ya que comprende los sentimientos humanos y es más comprensivo. Es capaz de explotar de rabia y dar lecciones morales en objeción a la actitud y las acciones de Rick.</p></br>';
    document.getElementById('info').scrollIntoView()
    }
function Rick(){
    document.getElementById('info').innerHTML='<img class="ImgM" src="Imagenes/Rick Sanchez3.jpg" alt="Rick Sanchez"><br><span><strong>Rick Sanchez</strong></span></br><br><p class="Personaje">Sánchez es un científico alcohólico misántropo conocido por su comportamiento temerario, nihilista y su personalidad pesimista, el personaje ha sido bien recibido. Es un científico loco sociopático que parece conocer todo en el universo y por lo tanto encuentra la vida una experiencia traumática y sin sentido. Sin embargo, a pesar de asumir que es la persona más inteligente del universo, ha habido momentos en los que se ha equivocado.</p></br>';
    document.getElementById('info').scrollIntoView()
    }
function Jerry(){
    document.getElementById('info').innerHTML='<img class="ImgM" src="Imagenes/Jerry Smith3.jpg" alt="Jerry Smith"><br><span><strong>Jerry Smith</strong></span></br><br><p class="Personaje">Jerry es retratado como un perdedor mediocre y desempleado que encuentra contenido en su vida simple. Utiliza la lástima como su «movimiento característico», lo que lleva a que la gente lo contrate o le dé algún tipo de consuelo. Jerry es famoso por su rivalidad mutua con Rick Sánchez, su suegro. En muchas ocasiones en las primeras temporadas, se ha demostrado que su relación con su pareja, Beth Smith, es increíblemente poco saludable, codependiente e incompatible. Uno de los pasatiempos de Jerry es la apicultura, que aprende en algún momento durante la cuarta temporada.</p></br>';
    document.getElementById('info').scrollIntoView()
    }
                    



