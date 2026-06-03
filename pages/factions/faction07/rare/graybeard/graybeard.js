const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Exposer la Faiblesse",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "4.3*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cage de Glace",
          description: `Attaque tous les ennemis. Possède 25 % de chances de placer un débuff de ${DEBUFFS.GEL} pendant 1 tour. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "4.1*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Temps de recharge -1", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Je t'attends !",
          description: `Place un buff ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. Possède 80 % de chances de placer un buff ${BUFFS.COUNTER} de 2 tours sur ce Champion.${RETURN}${RETURN}

La valeur du ${BUFFS.SHIELD} est proportionnelle à la DÉF. Il est impossible de retirer ce buff.`,
          cooldown: 6,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "936",
        "DEF": "1 112",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 30%`,
};
