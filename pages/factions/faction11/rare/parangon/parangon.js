const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Drain de Puissance",
          description: `Attaque un ennemi. Possede 50% de chances de reduire de 10% le Compteur de Tour de la cible.`,
          damage: "3.9*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Controle des Degats",
          description: `Place un buff ${BUFFS.UNKILLABLE} et un buff ${BUFFS.ATK} de 25% sur une cible allie pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Fers de Vie",
          description: `Attaque 3 fois de facon aleatoire. Chaque frappe possede 30% de chances de placer un debuff ${DEBUFFS.HEALS} de 100% et un debuff ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "2.6*DEF",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "14 370",
        "ATQ": "958",
        "DEF": "1 112",
        "VIT": "96",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
