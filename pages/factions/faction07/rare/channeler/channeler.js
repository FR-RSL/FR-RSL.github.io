const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rage des Anciens",
          description: `Attaque un ennemi. Possède 25% de chances de placer un débuff de ${DEBUFFS.HEALS} de 50% pendant 1 tour.`,
          damage: "4.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Halte !",
          description: `Attaque un ennemi. Offre 50% de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "6.4*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Souplesse",
          description: `Place un buff d'${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours. Remplit de 15% le Compteur de Tours de tous les alliés.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "881",
        "DEF": "1 002",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des Cryptes de Faction de 30`,
};
