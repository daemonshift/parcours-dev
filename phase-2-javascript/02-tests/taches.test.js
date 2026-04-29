import { describe, it, expect } from 'vitest'
import { ajouterTache, supprimerTache, toggleTache } from './taches.js'

describe('ajouterTache', () => {
  it('ajoute une tâche à la liste', () => {
    const resultat = ajouterTache([], 'Apprendre React')
    expect(resultat).toHaveLength(1)
    expect(resultat[0].texte).toBe('Apprendre React')
    expect(resultat[0].fait).toBe(false)
  })

  it('ignore une tâche vide', () => {
    const resultat = ajouterTache([], '   ')
    expect(resultat).toHaveLength(0)
  })
})

describe('supprimerTache', () => {
  it('supprime la bonne tâche', () => {
    const taches = [
      { texte: 'Tâche 1', fait: false },
      { texte: 'Tâche 2', fait: false },
    ]
    const resultat = supprimerTache(taches, 0)
    expect(resultat).toHaveLength(1)
    expect(resultat[0].texte).toBe('Tâche 2')
  })
})

describe('toggleTache', () => {
  it('marque une tâche comme faite', () => {
    const taches = [{ texte: 'Tâche 1', fait: false }]
    const resultat = toggleTache(taches, 0)
    expect(resultat[0].fait).toBe(true)
  })

  it('remet une tâche comme non faite', () => {
    const taches = [{ texte: 'Tâche 1', fait: true }]
    const resultat = toggleTache(taches, 0)
    expect(resultat[0].fait).toBe(false)
  })
})