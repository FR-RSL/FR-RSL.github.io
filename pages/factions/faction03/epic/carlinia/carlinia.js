const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Perdition",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pénitence",
          description: `Attaque tous les ennemis. Possède 55 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. Les cibles sous débuff ${DEBUFFS.BURN} ne peuvent pas résister à ce débuff.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Toujours surveillé",
          description: `Réduit d'1 tour la durée de tous les débuffs sur les alliés, puis place un buff ${BUFFS.STRENGTHEN} de 15 % sur tous les alliés pendant 2 tours. Il est impossible de retirer ou de voler ce buff.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brûler de honte [P]",
          description: `Chaque fois qu'un ennemi sous débuff ${DEBUFFS.BURN} obtient un tour, réduit d'1 tour la durée de 2 buffs aléatoires sur cet ennemi.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "793",
        "DEF": "1 365",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 35`,
};
