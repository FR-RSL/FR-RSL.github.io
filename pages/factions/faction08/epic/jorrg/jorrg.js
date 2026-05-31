const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brasero Putride",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Héros d'Antan",
          description: `Place un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours, puis augmente le Compteur de Tour de tous les alliés de 20 %.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Marche Fantôme",
          description: `Ranime 2 alliés pris au hasard avec 60 % de PV, puis remplit leurs Compteurs de Tour de 40 % et leur accorde un buff ${BUFFS.PERFECT_VEIL} pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 134",
        "DEF": "1 079",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
