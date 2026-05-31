const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Beigne",
          description: `Attaque un ennemi. Possède 25 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "0.1*HP+ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Déchaîné",
          description: `Retire 1 débuff aléatoire sur tous les alliés. Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 25 % sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rafale Sanglante [P]",
          description: `Lorsqu'il reçoit un soin, attaquera tous les ennemis en infligeant des dégâts proportionnels à tout les soins en surplus. Les dégâts infligés sont équivalents à 50 % des soins en surplus.`,
          damage: "Remaining Heal Amount*0.5",
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "947",
        "DEF": "826",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 16%`,
};
