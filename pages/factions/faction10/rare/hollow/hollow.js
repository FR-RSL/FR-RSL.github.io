const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hémorragie",
          description: `Attaque un ennemi. Possède 10 % de chances de placer un débuff de ${DEBUFFS.POISON} de 2,5 % pendant 2 tours.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ténèbres Rampantes",
          description: `Attaque 4 fois un ennemi. Chaque frappe réduit le Compteur de Tours de la cible et remplit de 5 % le Compteur de Tours de ce Champion.`,
          damage: "1.2*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frappe d'Éther",
          description: `Attaque un ennemi. Ignorera 25 % de la DÉF de la cible.`,
          damage: "4.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 299",
        "DEF": "859",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Donjons de 21%`,
};
