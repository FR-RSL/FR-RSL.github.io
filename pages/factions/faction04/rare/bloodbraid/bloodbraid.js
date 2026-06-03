const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bravoure Furieuse",
          description: `Attaque un ennemi. Possède 25% de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "4.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +15%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Assaut Soutenu",
          description: `Attaque 3 fois un ennemi. Possède 25% de chances d'accorder un Tour Supplémentaire.`,
          damage: "2.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +15%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Viemaudite",
          description: `Attaque un ennemi. Place un débuff de ${DEBUFFS.HEALS} de 100% pendant 2 tours. Soigne ce Champion à hauteur de 30% des dégâts infligés.`,
          damage: "6.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "892",
        "DEF": "826",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
