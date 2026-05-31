const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tir Confiant",
          description: `Attaque un ennemi. Place un buff d'${BUFFS.ATK} de 50 % pendant 2 tours sur ce Champion si l'attaque passe en critique.`,
          damage: "3.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Volée Massacrante",
          description: `Attaque tous les ennemis. Place un débuff de ${DEBUFFS.DEF} de 60 % pendant 2 tours sur la cible si cette attaque passe en critique.`,
          damage: "3.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Faire Mouche",
          description: `Attaque un ennemi. Ignorera 100 % de la DÉF.`,
          damage: "5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 553",
        "DEF": "936",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés Esprit lors de toutes les Batailles de 38%`,
};
