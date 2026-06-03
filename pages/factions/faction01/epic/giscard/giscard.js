const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brise-Ennemi",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 1 tour.`,
          damage: "3.65*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rugissement du Lion",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.${RETURN}
Place également sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 25% de ses PV MAX pendant 2 tours.`,
          damage: "3.6*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Champ de Force",
          description: `Place un buff ${BUFFS.DEF} de 60% et un buff ${BUFFS.ATK} de 50% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Égotiste [P]",
          description: `Remplit le Compteur de Tour de ce Champion de 15% dès qu'il se fait attaquer par un ennemi sous débuff ${DEBUFFS.PROVOKE} ou buff ${BUFFS.ATK}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "683",
        "DEF": "1 454",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 27%`,
};
