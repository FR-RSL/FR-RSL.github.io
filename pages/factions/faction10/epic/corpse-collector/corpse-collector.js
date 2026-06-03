const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Parasite Insidieux",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 40% de chances de placer un débuff de ${DEBUFFS.LEECH} de 2 tours.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Grêle de Feu",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75% de chances de placer, pendant 2 tours et sur tous les ennemis, un débuff de ${DEBUFFS.HEALS} de 100% et un débuff de ${DEBUFFS.PRE} de 50%.`,
          damage: "2.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fuite Toxique",
          description: `Attaque 3 fois au hasard.${RETURN}
Chaque frappe possède 75% de chances de placer, pendant 2 tours, un débuff d'${DEBUFFS.POISON} de 5%.${RETURN}
Place un buff ${BUFFS.VEIL} sur ce Champion pendant 1 tour.`,
          damage: "1.65*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 167",
        "DEF": "991",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des batailles d'Arène de 40`,
};
