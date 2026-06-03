const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Regard Hypnotique",
          description: `Attaque 1 ennemi. Possède 15% de chances de placer un débuff de ${DEBUFFS.SLEEP} d'1 tour.`,
          damage: "4.7*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Écailles Cuirassées",
          description: `Place, sur tous les alliés, un buff de ${BUFFS.SHIELD} équivalent à 20% des PV MAX de ce Champion pendant 3 tours. Place, pendant 2 tours, un buff de ${BUFFS.HEALS} de 15% sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Bouclier +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rêves Épouvantables",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff de ${DEBUFFS.SLEEP} d'1 tour. Possède 75% de chances contre les ennemis souffrant de débuffs.`,
          damage: "5*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "826",
        "DEF": "1 101",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des batailles d'Arène de 70`,
};
