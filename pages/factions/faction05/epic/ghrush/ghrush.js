const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Maillet Sanglant",
          description: `Attaque un ennemi. Possède 50 % de chances de placer sur la cible un débuff ${DEBUFFS.LEECH} de 2 tours avant d'attaquer.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Écrasement Brise-os",
          description: `Attaque tous les ennemis. Possède 60 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % ou un débuff ${DEBUFFS.CDAM} de 25 % pendant 2 tours.`,
          damage: "3.6*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fauchée Étouffante",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours. Place un buff ${BUFFS.HEALS} supplémentaire de 7,5 % sur tous les alliés pendant 1 tour si au moins un ennemi est touché par une frappe en critique.`,
          damage: "4*DEF",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "694",
        "DEF": "1 321",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 30%`,
};
