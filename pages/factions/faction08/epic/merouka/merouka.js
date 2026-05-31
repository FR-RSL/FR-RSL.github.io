const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Affliction de goudron",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 15 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "1.9*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sorcellerie du désert",
          description: `Retire tous les débuffs sur un allié ciblé, puis le soigne de 50 % de ses PV MAX.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Revenir de la vase",
          description: `Place un buff ${BUFFS.REVIVE_ON_DEATH} sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Élastique [P]",
          description: `Chaque fois qu'un Champion se fait frapper, augmente sa DÉF de 2,5 % (s'accumule jusqu'à 20 %). Se réinitialise à chaque round.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "771",
        "DEF": "1 288",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
