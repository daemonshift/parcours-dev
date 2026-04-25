const bouton = document.querySelector('#btn-theme')

bouton.addEventListener('click', function() {
  document.body.classList.toggle('clair')
  
  if (document.body.classList.contains('clair')) {
    bouton.textContent = '🌙 Mode sombre'
  } else {
    bouton.textContent = '☀️ Mode clair'
  }
})
