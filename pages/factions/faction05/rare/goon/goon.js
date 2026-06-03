const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Piège Cruel",
          description: `Attaque un ennemi. Offre 15% de chances de placer un débuff de ${DEBUFFS.SPD} de 15% pendant 2 tours.`,
          damage: "3*DEF+1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blessures Ravageuses",
          description: `Attaque tous les ennemis. Possède 40% de chances de placer un débuff de ${DEBUFFS.HEALS} de 50% pendant 2 tours.`,
          damage: "2*DEF+2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fort Mobile",
          description: `Soigne tous tes alliés à hauteur de 10% de leurs PV max. Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 30% sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "859",
        "DEF": "1 134",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 23%`,
};
