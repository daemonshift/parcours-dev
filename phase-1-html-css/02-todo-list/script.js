const input = document.querySelector('#input-tache')
const btnAjouter = document.querySelector('#btn-ajouter')
const liste = document.querySelector('#liste-taches')

btnAjouter.addEventListener('click', ajouterTache)

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    ajouterTache()
  }
})

function ajouterTache() {
  const texte = input.value.trim()

  if (texte === '') return

  const li = document.createElement('li')

  li.innerHTML = `
    <span>${texte}</span>
    <button class="btn-supprimer">✕</button>
  `

  li.querySelector('.btn-supprimer').addEventListener('click', function() {
    li.remove()
  })

  li.querySelector('span').addEventListener('click', function() {
    li.classList.toggle('fait')
  })

  liste.appendChild(li)
  input.value = ''
  input.focus()
}