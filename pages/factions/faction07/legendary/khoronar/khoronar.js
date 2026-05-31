const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Moulinet Massacreur",
          description: `Attaque tous les ennemis. A 50 % de chances de réduire le Compteur de Tour de chaque cible de 10 %.

Si Minaya se trouve dans la même équipe, attaque 2 fois tous les ennemis et les chances de réduire le Compteur de Tour de chaque cible passent à 100 %. Les dégâts de chaque frappe seront réduits de 50 %.`,
          damage: "0.16*HPMultiplier: 0.08*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Beuglement Bestial",
          description: `A 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. Place également un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.DEF} de 60 % sur ce Champion pendant 2 tours.

Si Minaya se trouve dans la même équipe, il est impossible de résister au débuff ${DEBUFFS.PROVOKE} placé par ce Champion.

Si Minaya se trouve dans la même équipe, retire également tous les débuffs de tous les alliés, puis place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.DEF} sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Valse de Bataille",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.ATK} de 50 % et un débuff ${DEBUFFS.DEF} de 60 % sur tous les ennemis pendant 2 tours. 

Si Minaya se trouve dans l'équipe, il est impossible de résister à ces débuffs.`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Garde Féroce [P]",
          description: `Contre-attaque lorsqu'il est frappé par des ennemis affligés de débuffs ${DEBUFFS.ATK}, ${DEBUFFS.DEF} ou ${DEBUFFS.SPD}. 

Contre-attaque toujours lorsqu'il est frappé si Minaya se trouve dans la même équipe.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Spectacle [P]",
          description: `Place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours si ce Champion tue un ennemi.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "27 090",
        "ATQ": "815",
        "DEF": "958",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 80`,
};
