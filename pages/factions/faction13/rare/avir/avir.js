const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flasque de Vitriol",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "4.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Catalyseur Corrosif",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff ${DEBUFFS.ATK} de 25% pendant 2 tours. Place un débuff ${DEBUFFS.SPD} de 15% pendant 1 tour sur les cibles affligées de débuffs ${DEBUFFS.POISON}.`,
          damage: "4.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Chances de Buff/Debuff +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Potions Revigorantes",
          description: `Remplit le compteur de tour de tous les alliés de 15%, puis les soigne à hauteur de 15% des PV MAX de ce Champion.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "881",
        "DEF": "1 035",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
