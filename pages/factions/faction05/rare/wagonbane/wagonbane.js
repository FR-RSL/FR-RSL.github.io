const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fléau d'il",
          description: `Attaque un ennemi. Possède 35 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours.`,
          damage: "4.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Magie Taille-Gore",
          description: `Attaque un ennemi. Place un buff ${BUFFS.HEALS} de 7,5 % sur l'allié ayant le moins de PV pendant 2 tours.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Initier le Chaos",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Possède 75 % de chances de réduire le Compteur de Tour de la cible de 15 %.`,
          damage: "6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "947",
        "DEF": "936",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
