const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Claymore suppurante",
          description: `Attaque un ennemi. Possède 35% de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coupe putride",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.DEF} de 30% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Possède 45% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brise-lame [P]",
          description: `${ACTIVE}

Place un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 1 tour si les dégâts en approche dépassent 20% des PV MAX de ce Champion.${RETURN}${RETURN}

${PASSIVE}

Contre-attaque lorsqu'il est frappé par un ennemi sous débuff ${DEBUFFS.PROVOKE}.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "749",
        "DEF": "1 277",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 25%`,
};
