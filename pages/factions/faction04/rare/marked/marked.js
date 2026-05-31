const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Danse de Lames",
          description: `Attaque un ennemi. Offre 30 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 1 tour.`,
          damage: "6*ATQ",
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Punition des Dieux",
          description: `Attaque tous les ennemis. Place un débuff de ${DEBUFFS.PRE} de 25 % pendant 2 tours.`,
          damage: "4.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Puissance Totémique",
          description: `Place 1 tour de buff de ${BUFFS.BLOCK_DEBUFFS} et 2 tours de buff d'${BUFFS.DEF} de 60 % sur tous les alliés.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "892",
        "DEF": "848",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 15%`,
};
