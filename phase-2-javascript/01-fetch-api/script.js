const input = document.querySelector('#input-pays')
const resultat = document.querySelector('#resultat')

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    chercherPays(input.value.trim())
  }
})

async function chercherPays(nom) {
  if (nom === '') return

  resultat.innerHTML = '<p>Chargement...</p>'

  try {
    const reponse = await fetch(`https://restcountries.com/v3.1/name/${nom}`)
    const data = await reponse.json()
    const pays = data[0]

    resultat.innerHTML = `
      <div class="carte-pays">
        <img src="${pays.flags.svg}" alt="Drapeau de ${pays.name.common}">
        <div>
          <h2>${pays.name.common}</h2>
          <p>🌍 Région : ${pays.region}</p>
          <p>👥 Population : ${pays.population.toLocaleString()}</p>
          <p>🏙️ Capitale : ${pays.capital?.[0] ?? 'Inconnue'}</p>
          <p>💰 Monnaie : ${Object.values(pays.currencies)?.[0]?.name ?? 'Inconnue'}</p>
        </div>
      </div>
    `
  } catch (erreur) {
    resultat.innerHTML = '<p class="erreur">Pays introuvable. Essaie le nom du pays dans sa propre langue !</p>'
  }
}