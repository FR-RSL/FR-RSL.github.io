const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Griffes Grattantes",
          description: `Attaque 2 fois un ennemi. Offre 25% de chances de placer un débuff de ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "1.1*ATQ+0.05*PV",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cri d'Avertissement",
          description: `Remplit de 30% le Compteur de Tours de tous les alliés. Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 60% sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Refuge",
          description: `Attaque tous les ennemis. Place, sur ce Champion, un buff de ${BUFFS.SHIELD} équivalent à 30% des PV MAX de ce Champion pendant 2 tours. Les dégâts augmentent en fonction des PV actuels de ce Champion.`,
          damage: "0.1*PV",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "925",
        "DEF": "749",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 21%`,
};
