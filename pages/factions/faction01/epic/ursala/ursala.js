const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance de Pénitence",
          description: `Attaque un ennemi. Possède 40 % de chances de réduire le Compteur de Tour de la cible de 10 %.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vagues de Chagrin",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. Place également un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours.`,
          damage: "3.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Requiem",
          description: `Ranime tous les alliés morts avec 75 % de PV, puis remplit leurs Compteurs de Tour de 50 %. Place également un buff ${BUFFS.DEF} de 60 % et un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 3 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "1 167",
        "DEF": "936",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de la Tour du Malheur de 24%`,
};
