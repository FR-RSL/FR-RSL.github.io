const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balayage Dédaigneux",
          description: `Attaque 1 ennemi. Offre 25% de chances de placer un débuff de ${DEBUFFS.ATK} de 25% pendant 2 tours.`,
          damage: "DEF*5",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Écraser les Faibles",
          description: `Attaque tous les ennemis. Possède 35% de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 15% pendant 2 tours. Inflige des dégâts supplémentaires aux ennemis affligés d'un débuff d'Affaiblissement.`,
          damage: "DEF*4.6Multiplier: 3*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Geler à pierre fendre",
          description: `Attaque 1 ennemi. Possède 75% de chances de placer un débuff de ${DEBUFFS.GEL} d'1 tour.`,
          damage: "DEF*6.5",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "870",
        "DEF": "1 013",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 15%`,
};
