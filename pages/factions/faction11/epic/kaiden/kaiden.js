const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tombé de Hallebarde",
          description: `Attaque un ennemi. Possède 15 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "3.7*DEF",
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Balayage Fracassant",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "3.4*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Grâces de la Chambre",
          description: `Ranime 2 alliés pris au hasard avec 50% de PV, puis leur accorde un buff ${BUFFS.DEF} de 60 % pendant 1 tour.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "16 350",
        "ATQ": "837",
        "DEF": "1 376",
        "VIT": "95",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "15"
  }
};

const aura = null;
