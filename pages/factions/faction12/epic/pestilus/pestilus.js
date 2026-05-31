const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Appel du Sang",
          description: `Attaque 2 fois au hasard. Possède 30 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flammes Internes",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours. 

Soigne tous les alliés de 15 % de leurs PV MAX si le débuff ${DEBUFFS.BURN} est placé. Remplit le Compteur de Tour de tous les alliés de 15 % si le débuff ${DEBUFFS.BURN} n'est pas placé.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Étrangeté de Bataille",
          description: `Place un buff ${BUFFS.PRE} de 50 % et un buff ${BUFFS.CDAM} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "848",
        "DEF": "1 112",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de la Tour du Malheur de 50`,
};
