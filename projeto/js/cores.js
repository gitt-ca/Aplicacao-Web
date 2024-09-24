document.addEventListener('DOMContentLoaded', function() {
  fetch('https://reqres.in/api/unknown')
    .then(response => response.json())
    .then(data => {
      const tabela = document.getElementById('colorTable');
      data.data.forEach(cor => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${cor.id}</td>
          <td>${cor.name}</td>
          <td style="background-color:${cor.color};">${cor.color}</td>
        `;
        tabela.appendChild(row);
      });
    })
    .catch(error => console.error('Erro:', error));
});

document.getElementById('logout').addEventListener('click', function() {
  localStorage.removeItem('userEmail');
  window.location.href = 'index.html';
});
