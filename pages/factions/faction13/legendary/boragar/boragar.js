const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton antique",
          description: `Attaque un ennemi. Possède 50% de chances de placer un buff ${BUFFS.DEF} de 60% pendant 1 tour sur l'allié ayant le moins de PV. Ne sera pas placé sur ce Champion. Sinon, possède 100% de chances si cette attaque passe en critique.`,
          damage: "0.3*PV",
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Âmes de Vieille Pierre",
          description: `Retire un débuff aléatoire sur tous les alliés, puis place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 20% des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +10%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rune d'Énergie",
          description: `Place un buff ${BUFFS.RES} de 50% et un buff ${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Blason de Boragar [P]",
          description: `Les alliés reçoivent 10% de dégâts en moins de la part des Champions dont la RÉS est inférieure ou égale à la leur.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 135",
        "ATQ": "925",
        "DEF": "1 244",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 50`,
};
