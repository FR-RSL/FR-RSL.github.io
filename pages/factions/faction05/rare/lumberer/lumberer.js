const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pulvérisateurs géants",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.ATK} de 25% pendant 2 tours. Possède également 20% de chances d'augmenter d'1 tour la durée de tous les débuffs ${DEBUFFS.DEF}.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Aplatir",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "6.45*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Élan massif",
          description: `Place un buff ${BUFFS.CRATE} de 15% sur ce Champion pendant 2 tours, puis attaque tous les ennemis.`,
          damage: "3.85*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 233",
        "DEF": "716",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
