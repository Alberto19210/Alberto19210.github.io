const charactersEl = document.getElementById('characters');
const nameFilterEl = document.getElementById('name-filter');
const statusFilterEl = document.getElementById('status-filter');
const loadMoreButton = document.getElementById('load-more-button');

let currentPage = 1;
const charactersPerPage = 20;

async function getCharacters(name, status, page) {
  let url = `https://rickandmortyapi.com/api/character/?page=${page}`;

  if (name || status) {
    url += '&';
    if (name) {
      url += `name=${name}&`;
    }

    if (status) {
      url += `status=${status}`;
    }
  }

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
}

async function displayCharacters(name, status) {
  const characters = await getCharacters(name, status, currentPage);

  charactersEl.innerHTML = '';

  // Renderizar los personajes
  for (let character of characters) {
    const card = document.createElement('div');
    card.classList.add('character-card');

    card.innerHTML = `
      <img src="${character.image}" />
      <h2>${character.name}</h2>
      <p>Status: ${character.status}</p>
      <p>Especie: ${character.species}</p>
    `;

    charactersEl.appendChild(card);
  }

  loadMoreButton.disabled = !(data.info.pages > currentPage);
}

async function loadMoreCharacters() {
  currentPage++;
  displayCharacters(nameFilterEl.value, statusFilterEl.value);
}

displayCharacters();

nameFilterEl.addEventListener('input', () => {
  currentPage = 1; // Resetear la página al filtrar
  displayCharacters(nameFilterEl.value, statusFilterEl.value);
});

statusFilterEl.addEventListener('change', () => {
  currentPage = 1; // Resetear la página al filtrar
  displayCharacters(nameFilterEl.value, statusFilterEl.value);
});

loadMoreButton.addEventListener('click', loadMoreCharacters);