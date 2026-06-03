const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Imprécation",
          description: `Attaque 1 ennemi. Offre 50% de chances de placer un débuff de ${DEBUFFS.PRE} de 25% pendant 2 tours.`,
          damage: "4.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Sombre Étreinte",
          description: `Soigne tous tes alliés à hauteur de 15% de leurs PV max.`,
          cooldown: 4,
          levelInfo: ["Soins +10%", "Soins +10%", "Soins +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Ailes de Ruine",
          description: `Place un buff d'${BUFFS.CRATE} de 30% et un buff d'${BUFFS.SPD} de 15% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "16 515",
        "ATQ": "914",
        "DEF": "1 013",
        "VIT": "101",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés dans les Cryptes de Faction de 13%.`
};
