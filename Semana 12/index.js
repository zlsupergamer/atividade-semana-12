fetch('http://localhost:3000/filmes')
  .then(response => response.json())
  .then(filmes => {
    const lista = document.getElementById('lista-filmes');
    filmes.forEach(filme => {
      const item = document.createElement('li');
      item.innerHTML = `<a href="detalhes.html?id=${filme.id}">${filme.titulo}</a>`;
      lista.appendChild(item);
    });
  });
