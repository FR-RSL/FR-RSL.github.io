const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Élégance",
          description: `Attaque 1 ennemi. Soigne à hauteur de 20% des dégâts infligés.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Soins +10%", "Dégâts +10%", "Dégâts +15%", "Soins +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fente Magnifique",
          description: `Attaque 1 ennemi. Offre 50% de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "5.6*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 400",
        "ATQ": "1 200",
        "DEF": "793",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
