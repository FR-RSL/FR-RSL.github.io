const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Éclair de mort",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe possède 40 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Si la cible est un Boss, les chances passent à 80 %.`,
          damage: "1.5*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tempête de savoir",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. Augmente également la durée de tous les buffs des alliés d'1 tour.${RETURN}${RETURN}

Ensuite, augmente la valeur de tous les ${BUFFS.SHIELD}s sur tous les alliés. La valeur de chaque ${BUFFS.SHIELD} est augmentée proportionnellement au nombre total de buffs dont la durée a été augmentée.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Codex intercipio",
          description: `Place 2 piles d'${BUFFS.INTERCEPT} sur l'allié ciblé.${RETURN}${RETURN}

Place un buff ${BUFFS.DEF} de 60 % et un buff ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. La valeur du ${BUFFS.SHIELD} est proportionnelle à la DÉF de ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Démence isolée [P]",
          description: `Au début de chaque round, place un buff ${BUFFS.COUNTER} sur ce Champion pendant 1 tour. Il est impossible de retirer ce buff.${RETURN}${RETURN}

À la fin du tour de ce Champion, lui accorde un buff ${BUFFS.COUNTER} pendant 1 tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "771",
        "DEF": "1 498",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 28%`,
};
