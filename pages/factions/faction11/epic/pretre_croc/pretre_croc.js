const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crocs Conduits",
          description: `Attaque un ennemi. Possède 75 % de chances de transférer sur la cible un débuff aléatoire de ce Champion.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Sombres Bénédictions",
          description: `Soigne un allié à hauteur de 20 % des PV MAX de ce Champion. Remplit également de 30 % le Compteur de Tour de la cible si cette Compétence la soigne entièrement. Place un buff ${BUFFS.VEIL} d'1 tour sur la cible si cette Compétence ne la soigne pas entièrement.`,
          cooldown: 3,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Retour dans les Rangs",
          description: `Ranime un allié tombé avec 30 % de PV, puis remplit de 30 % son Compteur de Tour. Place également un buff ${BUFFS.UNKILLABLE} d'1 tour sur la cible et un buff ${BUFFS.HEALS} de 15 % pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "18 330",
        "ATQ": "903",
        "DEF": "1 178",
        "VIT": "105",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 15%.`
};
