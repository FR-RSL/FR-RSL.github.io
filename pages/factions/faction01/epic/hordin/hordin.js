const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe Implacable",
          description: `Attaque 2 fois 1 ennemi. Octroie un Tour Supplémentaire si la cible est tuée.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Saigneur",
          description: `Attaque 1 ennemi. Offre 60% de chances de placer un débuff de ${DEBUFFS.ATK} de 50% pendant 2 tours. Soigne ce Champion à hauteur de 10% des dégâts infligés.`,
          damage: "6.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Haine Ardente",
          description: `Place un buff d'${BUFFS.ATK} de 50%, un buff d'${BUFFS.CRATE} de 30% et un buff d'${BUFFS.SPD} de 30% sur ce Champion pendant 2 tours. Octroie un Tour Supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 321",
        "DEF": "859",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Cryptes de Faction de 20%`,
};
