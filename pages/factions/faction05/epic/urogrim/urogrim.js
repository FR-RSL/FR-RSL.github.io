const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton-Crâne",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 25 % de chances de placer un débuff ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Teinture Irritante",
          description: `Retire tous les débuffs d'un allié, puis le soigne de 40 % de ses PV MAX.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Drôles de Vapeurs",
          description: `Place deux débuffs ${DEBUFFS.POISON} de 5 % sur tous les ennemis pendant 2 tours. Place également un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "881",
        "DEF": "1 145",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 20%`,
};
