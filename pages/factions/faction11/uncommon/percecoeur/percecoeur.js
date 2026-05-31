const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Perforer",
          description: `Attaque un ennemi.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Regle la Visee",
          description: `Attaque un ennemi. Place un buff ${BUFFS.ATQ} de 25% sur cette Championne pendant 2 tours si cette attaque passe en critique.`,
          damage: "7.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 057",
        "DEF": "859",
        "VIT": "89",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
