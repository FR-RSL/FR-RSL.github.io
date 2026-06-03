const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Nourrir de Souffrance",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 15% des dégâts infligés.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Étrange Résistance",
          description: `Soigne ce Champion à hauteur de 30% de ses PV MAX, puis place un buff d'${BUFFS.DEF} de 30% sur ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Possession d'Âme",
          description: `Échange les niveaux de PV restants avec une cible ennemie, puis équilibre les PV de tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "793",
        "DEF": "1 189",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
