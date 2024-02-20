*************************
const charactersEl = document.getElementById('characters');
const nameFilterEl = document.getElementById('name-filter');
const statusFilterEl = document.getElementById('status-filter');

// tenemos que crear la funcion que haga el llamado a la api

async function getCharacters (name, status){

    let url = 'https://rickandmortyapi.com/api/character/';

    if (name || status){
        url += '?';
        if(name){
            url += `name=${name}&`;
        }

        if(status){
            url += `status=${status}`;
        }
    }


    const response = await fetch(url);
    const data = await response.json(); 

    return data.results;

}

// la funcion que va a renderizar los elementos dentro del DOM

async function displayCharacters (name, status) {
    
    // Obtener los personajes filtrados
    const characters = await getCharacters(name, status);
    
    charactersEl.innerHTML = '';

    // renderizar los personajes
    for( let character of characters ){
        const card = document.createElement('div');
        card.classList.add('character-card');

        card.innerHTML = `
            <img src="${character.image}" />
            <h2> ${character.name} </h2>
            <p> Status: ${character.status} </p>
            <p> Especie: ${character.species} </p>
        `;

        charactersEl.appendChild(card);

    }

}

displayCharacters();

nameFilterEl.addEventListener('input', () => {
    displayCharacters(nameFilterEl.value, statusFilterEl.value );
});

statusFilterEl.addEventListener('change', () => {
    displayCharacters(nameFilterEl.value, statusFilterEl.value );
});
  *************************
var listaFotos = document.getElementById('fotos');
function randoNum(limit) {
  return Math.floor(Math.random() * limit);
}

var arrAll = [randoNum(394), randoNum(394), randoNum(394)];

/*fetch('https://rickandmortyapi.com/api/character/')
  .then(res => res.json())
  .then(function(resultadoApi) {
    console.log(resultadoApi);
    var conjuntoPersonajes = resultadoApi.results;
    console.log(conjuntoPersonajes);
    for (var i = 0; i < 3; i++) {
      var personajeRandom =
        conjuntoPersonajes[
          Math.floor(Math.random() * conjuntoPersonajes.length)
        ];
      console.log(personajeRandom);

      var listItem = document.createElement('div');
      var tagimagen = document.createElement('img');

      listItem.appendChild(tagimagen);

      tagimagen.src = personajeRandom.image;

      console.log(tagimagen);
      listaFotos.appendChild(listItem);
    }
  });


console.log(arrAll);
*/
fetch('https://rickandmortyapi.com/api/character/' + arrAll)
  .then(res => res.json())
  .then(function(resultado) {
    console.log(resultado);
    var resPersonajes = resultado;
    console.log(resPersonajes);
    for (var i = 0; i < 3; i++) {
      var listItem = document.createElement('div');
      var tagimagen = document.createElement('img');
      var dataCard = document.createElement('div');

      listItem.classList.add('contenedor');
      tagimagen.classList.add('personajes');
      dataCard.classList.add('datos');

      listItem.appendChild(tagimagen);
      listItem.appendChild(dataCard);

      tagimagen.src = resPersonajes[i].image;
      dataCard.innerHTML = `
      <h3>Name: ${resultado[i].name}</h3>
      <h3>Species: ${resultado[i].species}</h3>
      <h3>Type: ${resultado[i].type}</h3>
      <h3>Gender: ${resultado[i].gender}</h3>
      <h3>Origin: ${resultado[i].origin.name}</h3>
      <h3>Location: ${resultado[i].location.name}</h3>
      `;
      // dataCard.innerHTML = `
      // <h3>Name: ${grupoImagenes[i].name}</h3>
      //<h3>Species: ${grupoImagenes[i].species}</h3>
      //<h3>Type: ${grupoImagenes[i].type}</h3>
      // <h3>Gender: ${grupoImagenes[i].gender}</h3>
      // <h3>Origin: ${grupoImagenes[i].origin.name}</h3>
      //<h3>Location: ${grupoImagenes[i].location.name}</h3>

      //`
      console.log(tagimagen);
      listaFotos.appendChild(listItem);
    }
  });
