document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error-message');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verifique se o email e a senha
    if (email === 'eve.holt@reqres.in' && password === 'cityslicka') {

      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          // Se sucesso, salvar o e-mail no localStorage e manda pra home
          localStorage.setItem('userEmail', email);
          window.location.href = 'home.html';
        } else {
          errorMessage.textContent = 'Usuário ou senha incorreta';
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        errorMessage.textContent = 'Erro ao fazer login. Tente novamente mais tarde.';
      });
    } else {
      errorMessage.textContent = 'Usuário ou senha incorreta';
    }
  });
});
