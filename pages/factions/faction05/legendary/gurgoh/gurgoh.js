const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brise-glace",
          description: `Attaque 2 fois un ennemi. Place une frappe supplémentaire si un ennemi souffre d'un débuff de ${DEBUFFS.GEL}.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Glace les Os",
          description: `Retire tous les buffs dont disposent les ennemis. Possède 80% de chances de placer un débuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour. Accorde un Tour supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Avalanche",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.DEF} de 60% sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Place une frappe supplémentaire si un ennemi se trouve sous débuff ${DEBUFFS.GEL}.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Étreinte Gelée [P]",
          description: `Lorsque ce Champion est frappé par un ennemi, a 30% de chances de placer un débuff ${DEBUFFS.GEL} sur l'assaillant pendant 1 tour.${RETURN}${RETURN}

Augmente de 25% les dégâts infligés par les alliés contre les ennemis sous débuff ${DEBUFFS.GEL}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 465",
        "DEF": "1 046",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 30%`,
};
