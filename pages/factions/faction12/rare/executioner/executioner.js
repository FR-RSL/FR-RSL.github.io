const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup de Bouclier",
          description: `Attaque un ennemi. Possède 15 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour.`,
          damage: "5*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tumulte",
          description: `Attaque tous les ennemis. Réduit de 20 % le Compteur de Tours. Offre 50 % de chances de placer un débuff de ${DEBUFFS.SPD} de 15 % pendant 2 tours.`,
          damage: "2*ATQ+2.4*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Schiltron",
          description: `Place un buff d'${BUFFS.DEF} de 60 % et un buff de ${BUFFS.COUNTER} sur ce Champion pendant 3 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "782",
        "DEF": "1 255",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 17%`,
};
