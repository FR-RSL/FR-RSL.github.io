const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Frappe d'ombre",
          description: `Attaque un ennemi.${RETURN}${RETURN}
A 50% de chances de placer un debuff ${DEBUFFS.UNFEEBLE} pendant 2 tours. Si la cible est un Boss, place au lieu de cela un debuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. Il est impossible de resister a ce debuff si <span class="gold-t">Solanar l'etincelant</span> se trouve dans la meme equipe.`,
          damage: "6*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.png",
          name: "Purge ombrale",
          description: `A 75% de chances de retirer tous les buffs sur tous les ennemis. Il est impossible de resister a cet effet si <span class="gold-t">Solanar l'etincelant</span> se trouve dans la meme equipe.${RETURN}${RETURN}
Ensuite, a 75% de chances de placer un debuff ${DEBUFFS.DEF} de 60% sur tous les ennemis pendant 2 tours. Il est impossible de resister a ce debuff si <span class="gold-t">Solanar l'etincelant</span> se trouve dans la meme equipe.${RETURN}${RETURN}
Si <span class="gold-t">Solanar l'etincelant</span> se trouve dans la meme equipe, place egalement un buff ${BUFFS.ATK} de 50% sur tous les allies pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Grace de fleur de lune",
          description: `Ranime tous les allies morts avec 50% de PV et 50% de Compteur de Tour. Si <span class="gold-t">Solanar l'etincelant</span> se trouve dans la meme equipe et qu'il est mort, le ranime au lieu de cela avec 100% de Compteur de Tour.${RETURN}${RETURN}
Place sur tous les allies un buff ${BUFFS.SHIELD} equivalent a 30% des PV MAX de cette Championne pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Specialiste des ombres [P]",
          description: `Tous les effets de remplissage du Compteur de Tour utilises par les ennemis sont 30% moins efficaces. Si <span class="gold-t">Solanar l'etincelant</span> se trouve dans la meme equipe, remplit le Compteur de Tour de cette Championne de 30% de l'effet de remplissage du Compteur de Tour utilise par l'ennemi. Ne compte que les effets de remplissage du Compteur de Tour appliques par des competences.${RETURN}${RETURN}
 Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Championne si ce Championne specifique est mort.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "20 640",
        "ATQ": "914",
        "DEF": "1 288",
        "VIT": "108",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "20"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/acc.png",
  description: `Augmente la statistique PRE des Allies lors de toutes les Batailles de 70.`
};
