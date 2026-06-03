const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Nova Temporelle",
          description: `Attaque tous les ennemis. Offre 35% de chances de placer un débuff de ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Malédiction des Ans",
          description: `Attaque tous les ennemis. Possède 70% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. Possède également 45% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "3.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +15%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Banni du Temps",
          description: `Attaque tous les ennemis. Place un débuff de ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 564",
        "DEF": "1 013",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 33%`,
};
