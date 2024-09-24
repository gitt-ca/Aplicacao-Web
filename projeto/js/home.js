document.addEventListener('DOMContentLoaded', function() {
  const email = localStorage.getItem('userEmail');
  if (!email) {
    window.location.href = 'index.html';
  } else {
    document.getElementById('userEmail').textContent = email;
  }
});

document.getElementById('logout').addEventListener('click', function() {
  localStorage.removeItem('userEmail');
  window.location.href = 'index.html';
});
