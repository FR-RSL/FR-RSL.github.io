const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Battre",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff de ${DEBUFFS.DEF} de 60 % pendant 2 tours si l'attaque passe en critique.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frappe de Précision",
          description: `Attaque un ennemi. Cette attaque inflige 50 % de DÉG C. supplémentaires.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brume Tueuse",
          description: `Attaque un ennemi. Place un coup supplémentaire si cette attaque passe en critique. Remplit de 15 % le Compteur de Tour de tous les alliés si cette attaque tue un ennemi.`,
          damage: "5.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 531",
        "DEF": "870",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
