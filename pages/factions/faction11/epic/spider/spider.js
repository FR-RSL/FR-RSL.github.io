const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Skill 229001 name",
          description: `Skill 229001 description`,
          damage: "4*ATQ",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Calamité",
          description: `Attaque tous les ennemis. Réduit d'1 tour la durée de tous les buffs. Offre 50 % de chances de placer un débuff de ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "1.8*ATQ+0.1*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Marque Éclatante",
          description: `Possède 60 % de chances de placer, pendant 2 tours, un débuff de ${DEBUFFS.DEF} de 60 % sur tous les ennemis. Possède 30 % de chances de placer, pendant 1 tour, un débuff d'${DEBUFFS.WEAKEN} de 15 % sur tous les ennemis.`,
          cooldown: 6,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "1 211",
        "DEF": "870",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Donjons de 25%`,
};
