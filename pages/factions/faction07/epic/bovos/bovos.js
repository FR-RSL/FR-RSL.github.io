const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Terre profanée",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % sur l'ennemi pendant 2 tours.`,
          damage: "4.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lieu diabolique",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.CRATE} de 30 % et un débuff ${DEBUFFS.CDAM} de 25 % sur tous les ennemis pendant 2 tours.`,
          damage: "4.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bénédiction de soufre",
          description: `Retire 1 débuff aléatoire sur tous les alliés. 

Place ensuite un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.CDAM} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sang pour sang [P]",
          description: `Soigne un allié de 10 % de ses PV MAX lorsqu'il se fait frapper par un coup critique.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "859",
        "DEF": "1 167",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
