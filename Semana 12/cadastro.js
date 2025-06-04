const form = document.getElementById('form-filme');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const filme = {
    titulo: document.getElementById('titulo').value,
    diretor: document.getElementById('diretor').value,
    ano: parseInt(document.getElementById('ano').value),
    sinopse: document.getElementById('sinopse').value,
    imagem: document.getElementById('imagem').value
  };

  fetch('http://localhost:3000/filmes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filme)
  })
    .then(() => {
      alert('Filme cadastrado com sucesso!');
      form.reset();
    });
});
