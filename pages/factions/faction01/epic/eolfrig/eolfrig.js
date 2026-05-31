const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Humilier",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Affluence de moral",
          description: `Attaque tous les ennemis. Possède 75 % de chances de voler 1 buff aléatoire à chaque ennemi. Place également un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.`,
          damage: "3.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Offensive engagée",
          description: `Remplit le Compteur de tour de tous les alliés de 15 %, puis place un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pérenne [P]",
          description: `Retire tous les débuffs ${DEBUFFS.ATK} sur tous les alliés au début du tour de ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 233",
        "DEF": "991",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 15%`,
};
