const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double Débilité",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 25 % de chances d'augmenter d'1 tour la durée d'un débuff aléatoire.`,
          damage: "1.6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Passer un savon",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 40 % de chances de retirer un buff aléatoire de la cible.`,
          damage: "1.8*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Fleurs de Haine",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.RES} de 50 % pendant 2 tours.`,
          damage: "3.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Impitoyable [P]",
          description: `Inflige 10 % de dégâts en plus contre les cibles dont la RÉS est inférieure à la PRÉ de ce Champion.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 409",
        "DEF": "804",
        "VIT": "97",
        "TAUX C.": "15%",
        "DEG C.": "60%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX C. des Allies lors de toutes les Batailles de 12%.`
};
