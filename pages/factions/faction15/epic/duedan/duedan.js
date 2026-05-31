const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Griffe aimant",
          description: `Attaque un ennemi. Possède 50 % de chances de retirer 1 débuff aléatoire sur tous les alliés.`,
          damage: "0.22*HP",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Effigie protectrice",
          description: `Attaque tous les ennemis. Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 15 % des PV MAX de ce Champion pendant 2 tours. Augmente d'1 tour la durée de tous les buffs de tous les alliés.`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Bouclier +10%", "Dégâts +10%", "Bouclier +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Appât des fous",
          description: `Place un buff ${BUFFS.TAUNT} sur ce Champion pendant 1 tour. Place également un buff ${BUFFS.STRENGTHEN} de 25 % et un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "826",
        "DEF": "1 156",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 20%`,
};
