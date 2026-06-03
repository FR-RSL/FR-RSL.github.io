const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Merlin d'épine",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Soigne également l'allié ayant le moins de PV de 15 % des dégâts infligés.${RETURN}${RETURN}

Le débuff ${DEBUFFS.PROVOKE} peut être placé même si cette attaque consiste en une frappe faible.`,
          damage: "0.25*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sermon de pointes",
          description: `Attaque 2 fois tous les ennemis. La première frappe possède 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. La seconde frappe possède 75 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours. Place un buff ${BUFFS.STRENGTHEN} de 25 % sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Les débuffs ${DEBUFFS.LEECH} et ${DEBUFFS.PROVOKE} peuvent être placés même si cette attaque consiste en une frappe faible.`,
          damage: "0.15*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Amas de ronces",
          description: `Attaque tous les ennemis. Les dégâts augmentent de 5 % pour chaque débuff sur chaque ennemi. Soigne également tous les alliés de 20 % des dégâts infligés et leur accorde un buff ${BUFFS.SHIELD} de 2 tours équivalent à 20 % des dégâts infligés.`,
          damage: "0.25*PV*(1+0.05*Target Debuffs)",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sans épine [P]",
          description: `Réduit de 15 % les dégâts reçus par tous les alliés de la part des ennemis sous débuffs ${DEBUFFS.PROVOKE}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 470",
        "ATQ": "903",
        "DEF": "1 178",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 28%`,
};
