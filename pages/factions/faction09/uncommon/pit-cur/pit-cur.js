const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mord-cuisse",
          description: `Attaque un ennemi. Offre 25% de chances de placer un débuff de ${DEBUFFS.SPD} de 15% pendant 2 tours.`,
          damage: "4.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Infection Rabique",
          description: `Attaque tous les ennemis. Possède 25% de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "4.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "826",
        "DEF": "881",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
