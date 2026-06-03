const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tonalité d'effroi",
          description: `Attaque un ennemi. Transfère tous les débuffs de ce Champion sur la cible avant l'attaque. Il est impossible pour les Boss de résister à cet effet.${RETURN}${RETURN}

A 75 % de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour. Il est impossible pour les Boss de résister à ce débuff.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dissonance sismique",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}

Après la première frappe, a 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % et un débuff ${DEBUFFS.WEAKEN} de 25 % sur tous les ennemis pendant 2 tours. Il est impossible pour les Boss de résister à ces débuffs.${RETURN}${RETURN}

Après la seconde frappe, a 75 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % et un débuff ${DEBUFFS.RES} de 50 % sur tous les ennemis pendant 2 tours. Il est impossible pour les Boss de résister à ces débuffs.`,
          damage: "2*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Muscle machinal",
          description: `Place un buff ${BUFFS.COUNTER} et un buff ${BUFFS.UNKILLABLE} sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.TAUNT} sur ce Champion pendant 2 tours. Si un Boss est présent dans la Manche en cours, ces buffs sont protégés.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bourdonnement d'agonie [P]",
          description: `Dès que ce Champion place un débuff sur un ennemi, inflige des dégâts égaux à 1 % de ses PV MAX pour chaque débuff dont il est actuellement affligé. (S'accumule jusqu'à 10 %.) Se produit une fois par compétence et une fois par cible.`,
          damage: "0.01*Target Max HP*Target Debuffs",
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "771",
        "DEF": "1 597",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%`,
};
