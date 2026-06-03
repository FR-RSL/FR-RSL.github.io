const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe d'ombre",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 50% de chances de placer un débuff ${DEBUFFS.UNFEEBLE} pendant 2 tours. Si la cible est un Boss, place au lieu de cela un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. Il est impossible de résister à ce débuff si Solanar l'étincelant se trouve dans la même équipe.`,
          damage: "6*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Purge ombrale",
          description: `A 75% de chances de retirer tous les buffs sur tous les ennemis. Il est impossible de résiste à cet effet si Solanar l'étincelant se trouve dans la même équipe.${RETURN}${RETURN}

Ensuite, a 75% de chances de placer un débuff ${DEBUFFS.DEF} de 60% sur tous les ennemis pendant 2 tours. Il est impossible de résister à ce débuff si Solanar l'étincelant se trouve dans la même équipe.${RETURN}${RETURN}

Si Solanar l'étincelant se trouve dans la même équipe, place également un buff ${BUFFS.ATK} de 50% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Grâce de fleur de lune",
          description: `Ranime tous les alliés morts avec 50% de PV et 50% de Compteur de Tour. Si Solanar l'étincelant se trouve dans la même équipe et qu'il est mort, le ranime au lieu de cela avec 100% de Compteur de Tour.${RETURN}${RETURN}

Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 30% des PV MAX de cette Championne pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Spécialiste des ombres [P]",
          description: `Tous les effets de remplissage du Compteur de Tour utilisés par les ennemis sont 30% moins efficaces. Si Solanar l'étincelant se trouve dans la même équipe, remplit le Compteur de Tour de cette Championne de 30% de l'effet de remplissage du Compteur de Tour utilisé par l'ennemi. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte. Ne compte que les effets de remplissage du Compteur de Tour appliqués par des compétences.`,
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
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRE des Allies lors de toutes les Batailles de 70.`
};
