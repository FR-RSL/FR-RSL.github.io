const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Perceur d'Armure",
          description: `Attaque un ennemi. Ignorera 25% de la DÉF de la cible.`,
          damage: "2.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lancé Étourdissant",
          description: `Attaque 2 fois un ennemi. Offre 75% de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "2.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Serres",
          description: `Attaque 3 fois au hasard. Possède 75% de chances de placer un débuff de ${DEBUFFS.ATK} de 50% et un débuff de ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "2.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 885",
        "ATQ": "1 608",
        "DEF": "837",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Donjons de 23%`,
};
