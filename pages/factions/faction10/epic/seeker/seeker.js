const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dévorer",
          description: `Attaque 2 fois un ennemi. Possède 25% de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vent arrière",
          description: `Remplit de 30% le Compteur de Tours de tous les alliés. Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 50% sur tous les alliés. Accorde un Tour Supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sang Noir [P]",
          description: `Soigne ce Champion de 20% de PV, puis place, pendant 2 tours, un buff d'${BUFFS.DEF} de 60% sur tous les alliés lorsqu'un coup passe en critique.`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 002",
        "DEF": "1 178",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des batailles d'Arène de 30%`,
};
