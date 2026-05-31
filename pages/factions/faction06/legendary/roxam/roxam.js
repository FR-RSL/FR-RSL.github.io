const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Changement Chroma",
          description: `Attaque un ennemi.

Remplit le Compteur de Tour de ce Champion de 10 %. Place également un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 1 tour si cette attaque est critique.

Si ce Champion est sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, remplit au lieu de cela le Compteur de Tour de ce Champion de 20 %.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Embuscade de Jungle",
          description: `Attaque un ennemi. Remplit le Compteur de Tour de ce Champion de 50 %.

A 75 % de chances de placer un débuff ${DEBUFFS.STUN} sur la cible pendant 1 tour lorsque ce Champion attaque alors qu'il bénéficie d'un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.

A 75 % de chances de placer un débuff ${DEBUFFS.SLEEP} sur la cible pendant 1 tour lorsque ce Champion attaque alors qu'il bénéficie d'un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.

Place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours après qu'il a attaqué sans buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.

Ignorera les buffs ${BUFFS.SHIELD}, ${BUFFS.STRENGTHEN} et ${BUFFS.UNKILLABLE}.`,
          damage: "6.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pas Dansant",
          description: `(Lorsque ce Champion est sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL})

Attaque tous les ennemis. A 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % et un débuff ${DEBUFFS.WEAKEN} de 25 %. Diminue de 2 tours le temps de recharge de la compétence Embuscade de jungle. Ignorera les buffs ${BUFFS.BLOCK_DEBUFFS}, ${BUFFS.SHIELD} et ${BUFFS.STRENGTHEN}.

(Lorsque ce Champion n'est pas sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL})

Attaque un ennemi. A 75 % de chances de placer sur la cible un débuff ${DEBUFFS.DEF} de 60 % et un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours avant d'attaquer. Place un buff ${BUFFS.PERFECT_VEIL} de 2 tours sur ce Champion après l'attaque.`,
          damage: "6.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Caméléon [P]",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.ATK} de 50 % sur ce Champion pendant 1 tour, ainsi qu'un buff ${BUFFS.HEALS} de 15 % pendant 2 tours dès qu'il reçoit un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.

Place un buff ${BUFFS.PERFECT_VEIL} protégé sur ce Champion pendant 1 tour dès qu'un ennemi reçoit un buff provenant de compétences.

Si ses PV MAX de la cible sont supérieurs à ceux de ce Champion, ignorera 15 % de la DÉF de la cible Si les PV MAX de la cible sont supérieurs au double de ceux de ce Champion, ignorera 30 % de la DÉF de la cible.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 553",
        "DEF": "958",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 23%`,
};
