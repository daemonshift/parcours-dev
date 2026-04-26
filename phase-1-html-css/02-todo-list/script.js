const input = document.querySelector('#input-tache')
const btnAjouter = document.querySelector('#btn-ajouter')
const liste = document.querySelector('#liste-taches')

// Charger les tâches sauvegardées au démarrage
let taches = JSON.parse(localStorage.getItem('taches')) || []
afficherTaches()

btnAjouter.addEventListener('click', ajouterTache)

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    ajouterTache()
  }
})

function ajouterTache() {
  const texte = input.value.trim()
  if (texte === '') return

  taches.push({ texte: texte, fait: false })
  sauvegarder()
  afficherTaches()

  input.value = ''
  input.focus()
}

function afficherTaches() {
  liste.innerHTML = ''

  taches.forEach(function(tache, index) {
    const li = document.createElement('li')
    if (tache.fait) li.classList.add('fait')

    li.innerHTML = `
      <span>${tache.texte}</span>
      <button class="btn-supprimer">✕</button>
    `

    li.querySelector('span').addEventListener('click', function() {
      taches[index].fait = !taches[index].fait
      sauvegarder()
      afficherTaches()
    })

    li.querySelector('.btn-supprimer').addEventListener('click', function() {
      taches.splice(index, 1)
      sauvegarder()
      afficherTaches()
    })

    liste.appendChild(li)
  })
}

function sauvegarder() {
  localStorage.setItem('taches', JSON.stringify(taches))
}