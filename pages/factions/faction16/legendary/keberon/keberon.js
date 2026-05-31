const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Déchirure de feu",
          description: `Attaque 2 fois un ennemi. 

A 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. 

A 50 % de chances d'attaquer avec cette compétence dès qu'un débuff ${DEBUFFS.BURN} est activé sur un ennemi. Se produit une fois par tour.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Marque brûlante",
          description: `Attaque 2 fois un ennemi. Avant d'attaquer, place un débuff ${DEBUFFS.DEATHBRAND} sur la cible pendant 2 tours.

Ignorera les buffs ${BUFFS.UNKILLABLE} et ${BUFFS.SHIELD}, ainsi que 25 % de la DÉF de la cible. 

Active la compétence Pouvoir de Pyrenei de ce Champion si la cible est tuée. Si la cible survit, remplit au lieu de cela le Compteur de Tour de ce Champion de 50 %.`,
          damage: "2.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Pouvoir de Pyrenei",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours. 

A 75 % de chances de placer un débuff ${DEBUFFS.BURN} sur tous les ennemis pendant 2 tours. 

Remplit de 20 % le Compteur de Tour de ce Champion pour chaque débuff ${DEBUFFS.BURN}placé sur les ennemis et remplit de 10 % le Compteur de Tour de ce Champion pour chaque débuff ${DEBUFFS.BURN} auquel les ennemis résistent.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Garde du Sous-flamme [P]",
          description: `${ACTIVE}

Active un effet [Délai] sur ce Champion dès qu'il reçoit un coup fatal.

${PASSIVE}

Soigne ce Champion de 20 % de ses PV MAX dès qu'un débuff ${DEBUFFS.BURN} est activé sur un ennemi. 

Dès qu'un débuff ${DEBUFFS.BURN} expire ou est retiré à un ennemi, place un débuff ${DEBUFFS.TRUE_FEAR} sur cet ennemi pendant 1 tour.`,
          cooldown: 4,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 454",
        "DEF": "1 123",
        "VIT": "99",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Allies lors de toutes les Batailles de 28%.`
};
