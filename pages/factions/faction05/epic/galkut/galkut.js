const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Broyage de Membres",
          description: `Attaque 2 fois un ennemi. Offre 25% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "1.85*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Raclée Brutale",
          description: `Attaque tous les ennemis, 1 par 1, dans un ordre aléatoire. Les dégâts infligés sont réduits de 25% après chaque frappe.`,
          damage: "6.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Barrage Retentissant",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.BOMB} qui détonera après 2 tours.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 400",
        "ATQ": "1 321",
        "DEF": "1 222",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des Donjons de 24%`,
};
