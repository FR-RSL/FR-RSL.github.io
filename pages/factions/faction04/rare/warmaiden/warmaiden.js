const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Attaque Féroce",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff de ${DEBUFFS.POISON} de 2,5 % pendant 1 tour.`,
          damage: "2.4*ATQ+50",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frappe Fortunée",
          description: `Attaque un ennemi. Place un buff d'${BUFFS.ATK} de 50 % sur ce Champion et place une frappe supplémentaire si cette attaque passe en critique. La frappe supplémentaire ne peut pas passer en critique.`,
          damage: "3*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Souffle Émiettant",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff de ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 321",
        "DEF": "727",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
