const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch(`http://localhost:3000/filmes/${id}`)
  .then(res => res.json())
  .then(filme => {
    const div = document.getElementById('detalhes-filme');
    div.innerHTML = `
      <h2>${filme.titulo}</h2>
      <p><strong>Diretor:</strong> ${filme.diretor}</p>
      <p><strong>Ano:</strong> ${filme.ano}</p>
      <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
      <img src="${filme.imagem}" alt="${filme.titulo}" width="200"/>
    `;
  });
