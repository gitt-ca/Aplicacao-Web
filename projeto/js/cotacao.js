document.addEventListener('DOMContentLoaded', function() {
  fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    .then(response => response.json())
    .then(data => {
      const moedas = ['USDBRL', 'EURBRL', 'BTCBRL'];
      const tabela = document.getElementById('cotacaoTable');

      moedas.forEach(moeda => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${moeda}</td>
          <td>${data[moeda].bid}</td>
          <td>${data[moeda].ask}</td>
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
