const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèches Abrutissantes",
          description: `Attaque un ennemi. Offre 35 % de chances de placer un débuff de ${DEBUFFS.PRE} de 25 % pendant 2 tours. Place une frappe supplémentaire si la cible se trouve sous débuff de ${DEBUFFS.PRE}.`,
          damage: "2.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Suppuration Fétide",
          description: `Attaque un ennemi. Possède 45 % de chances de placer un débuff de ${DEBUFFS.LEECH} de 2 tours.`,
          damage: "3.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Feu de crypte",
          description: `Attaque 3 fois au hasard. Possède 30 % de chances de placer un débuff de ${DEBUFFS.BURN} de 2 tours.`,
          damage: "1.25*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 390",
        "ATQ": "1 443",
        "DEF": "760",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
