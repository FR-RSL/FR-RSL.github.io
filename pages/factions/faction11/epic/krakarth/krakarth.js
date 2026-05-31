const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Magnifique sceptre",
          description: `Attaque un ennemi. Possède 30 % de chances de retirer 1 débuff aléatoire sur un allié choisi au hasard. Ne retirera pas de débuff sur ce Champion.`,
          damage: "0.2*PV",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Retour éternel",
          description: `Attaque un ennemi. Place un buff ${BUFFS.REVIVE_ON_DEATH} sur ce Champion pendant 2 tours.`,
          damage: "0.3*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Noble puissance",
          description: `Place un buff ${BUFFS.STRENGTHEN} de 25 % et un buff ${BUFFS.SHIELD} équivalent à 20 % des PV MAX de ce Champion sur tous les alliés pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Grand pilier [P]",
          description: `Augmente de 15 % la valeur de tous les buffs ${BUFFS.SHIELD} placés sur tous les alliés lorsque les buffs sont placés.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "20 475",
        "ATQ": "749",
        "DEF": "1 189",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "45",
        "PRE": "0"
  }
};

const aura = null;
