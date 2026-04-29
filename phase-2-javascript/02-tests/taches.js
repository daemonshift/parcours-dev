// Les fonctions pures de notre todo list

export function ajouterTache(taches, texte) {
  if (texte.trim() === '') return taches
  return [...taches, { texte, fait: false }]
}

export function supprimerTache(taches, index) {
  return taches.filter((_, i) => i !== index)
}

export function toggleTache(taches, index) {
  return taches.map((tache, i) => 
    i === index ? { ...tache, fait: !tache.fait } : tache
  )
}