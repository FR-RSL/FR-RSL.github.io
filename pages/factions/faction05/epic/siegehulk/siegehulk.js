const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bélier Défonçant",
          description: `Attaque un ennemi. Réduit le Compteur de Tour de la cible de 15% si elle se trouve sous débuff ${DEBUFFS.DEF} ou ${DEBUFFS.SPD}.`,
          damage: "3.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Volée de bois vert",
          description: `Place un buff ${BUFFS.ATK} de 50% sur ce Champion pendant 2 tours, puis attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brise-Siège",
          description: `Place un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.CDAM} de 30% sur ce Champion pendant 2 tours, puis attaque un ennemi. Possède 75% de chances de placer sur la cible un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "5.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 542",
        "DEF": "760",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de la Tour du Malheur de 24%`,
};
