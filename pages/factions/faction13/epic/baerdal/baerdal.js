const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache Ensorcelée",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Protection de Fée",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours si la cible est affligée d'un débuff ${DEBUFFS.HEALS}. Place sur ce Champion un buff ${BUFFS.SHIELD} de 3 tours équivalent à 30 % des dégâts infligés.`,
          damage: "1.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Paranoïa [P]",
          description: `Place, au début de chaque round, un buff de ${BUFFS.COUNTER} d'1 tour sur ce Champion. Place, à la fin de son Tour, un buff de ${BUFFS.COUNTER} d'1 tour sur ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 398",
        "DEF": "826",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "60",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Donjons de 32%`,
};
