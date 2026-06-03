const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vile drogue",
          description: `Attaque tous les ennemis. Possède 30 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "3.1*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Expertise de savant",
          description: `Possède 75 % de chances de placer deux débuffs ${DEBUFFS.POISON} de 5 % et un débuff ${DEBUFFS.POISON_S} de 25 % sur tous les ennemis pendant 2 tours. Place également un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chymie",
          description: `Augmente d'1 tour la durée de tous les débuffs ${DEBUFFS.POISON} et ${DEBUFFS.BURN} sur tous les ennemis. Ensuite, active instantanément un déclenchement de tous les débuffs ${DEBUFFS.POISON} et ${DEBUFFS.BURN} sur tous les ennemis.${RETURN}${RETURN}

Place pendant 2 tours un débuff ${DEBUFFS.WEAKEN} de 25 % sur les ennemis qui ne se trouvent pas sous débuff ${DEBUFFS.POISON} ou ${DEBUFFS.BURN}.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fumigateur [P]",
          description: `La RÉS de ce Champion est augmentée de 5 % pour chaque débuff ${DEBUFFS.POISON} dont est affligée l'équipe ennemie.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "980",
        "DEF": "1 211",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 50`,
};
