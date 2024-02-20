****************************
     fetch('https://rickandmortyapi.com/api/character/')
  .then(res => res.json())
  .then(function(resultadoApi) {
    console.log(resultadoApi);
    conjuntoPersonajes = resultadoApi.results;
    console.log(conjuntoPersonajes);
    siguientePagina = resultadoApi.info.next;
    crearElementos(conjuntoPersonajes);
  });
****************************
// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario de búsqueda por su ID
    var form = document.getElementById("formBuscar");

    // Agrega un listener para el evento de envío del formulario
    form.addEventListener("submit", function(event) {
        // Evita el comportamiento por defecto del formulario (recargar la página)
        event.preventDefault();

        // Obtiene el valor del campo de búsqueda
        var searchTerm = document.getElementById("buscar").value;

        // Llama a una función para buscar y mostrar los resultados
        buscarPersonaje(searchTerm);
    });
});

// Función para buscar personajes
function buscarPersonaje(searchTerm) {
    // Aquí puedes hacer una solicitud AJAX a una API que proporcione los datos de los personajes
    // Por ejemplo, podrías usar la API de Rick and Morty: https://rickandmortyapi.com/
    // Dependiendo de la respuesta de la API, puedes mostrar los resultados en la página

    // Ejemplo de solicitud de búsqueda ficticia
    var url = "https://ejemplo-api.com/buscar?query=" + encodeURIComponent(searchTerm);

    // Ejemplo de solicitud AJAX utilizando Fetch API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Lógica para mostrar los resultados en la página
            mostrarResultados(data);
        })
        .catch(error => {
            console.error('Error al buscar personaje:', error);
        });
}

// Función para mostrar los resultados de la búsqueda en la página
function mostrarResultados(data) {
    // Aquí puedes manipular el DOM para mostrar los resultados en el área de "personajes"
    var personajesDiv = document.querySelector('.personajes');
    // Por ejemplo, podrías crear elementos HTML para cada resultado y añadirlos al div de "personajes"
    // Usando bucles, creación de elementos y manipulación de clases según sea necesario
}
