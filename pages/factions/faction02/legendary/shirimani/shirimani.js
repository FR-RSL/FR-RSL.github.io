const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Éclairs de Froid",
          description: `Attaque 3 fois au hasard. Possède 25% de chances de placer un débuff de ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "1.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vague Redynamisante",
          description: `Soigne 1 allié de 50% et les autres alliés de 20% de leurs PV MAX. Place un buff de ${BUFFS.HEALS} de 15% pendant 2 tours sur les cibles ayant tous leurs PV.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tempête de Glace",
          description: `Attaque tous les ennemis. Possède 80% de chances de placer un débuff de ${DEBUFFS.GEL} pendant 1 tour. Remplit de 10% le Compteur de Tours de ce Champion pour chaque ennemi attaqué.`,
          damage: "4.1*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "1 167",
        "DEF": "1 079",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 33%`,
};
