const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Maîtresse des Charmes",
          description: `Attaque un ennemi. Place un buff ${BUFFS.PERFECT_VEIL} pendant 1 tour sur l'allié ayant le moins de PV.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Emprise Hivernale",
          description: `Place un buff ${BUFFS.DEF} de 60 % et un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours, puis attaque tous les ennemis sous débuff ${DEBUFFS.GEL}. Place un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours sur tous les ennemis affligés de débuffs ${DEBUFFS.GEL}.`,
          damage: "4.3*ATQ",
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Barrage Stalactite",
          description: `Attaque tous les ennemis. Possède 80 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "4.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tisse-gel [P]",
          description: `${PASSIVE}

Immunisé contre les débuffs ${DEBUFFS.GEL}.${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 25 % chaque fois qu'un allié reçoit un débuff ${DEBUFFS.GEL}.${RETURN}${RETURN}

${ACTIVE}

À la fin de chaque tour ennemi ou allié, retire tous les débuffs ${DEBUFFS.GEL} se trouvant sur les alliés.${RETURN}${RETURN}

Si plusieurs Champions dans l'équipe disposent de cette Compétence, une seule retirera les débuffs ${DEBUFFS.GEL} se trouvant sur les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 090",
        "DEF": "1 233",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `
Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 60`,
};
