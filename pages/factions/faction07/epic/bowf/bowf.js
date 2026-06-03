const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame puante",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe possède 25 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "0.13*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lance de pestilence",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Augmente également la durée de tous les buffs des alliés d'1 tour.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Giclée de soin",
          description: `Retire 2 débuffs aléatoires sur tous les alliés, puis les soigne de 10 % de leurs PV MAX.${RETURN}${RETURN}

Place également un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bombe antibiotique [P]",
          description: `Réduit de 50 % les dégâts que tous les alliés reçoivent des débuffs ${DEBUFFS.POISON}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "936",
        "DEF": "1 123",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
