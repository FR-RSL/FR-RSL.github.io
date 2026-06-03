const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coupe Profonde",
          description: `Attaque un ennemi. Possède 25% de chances de placer un débuff de ${DEBUFFS.SPD} de 15% pendant 2 tours.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Attrape !",
          description: `Attaque 4 fois au hasard. Réduit de 15% le Compteur de Tours si cette attaque passe en critique.`,
          damage: "1.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "892",
        "DEF": "848",
        "VIT": "83",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
