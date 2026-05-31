const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rafale de Flèches",
          description: `Attaque 4 fois au hasard. Chaque frappe possède 25 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "0.7*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Art de la Douleur",
          description: `Attaque tous les ennemis. Offre 30 % de chances de placer un débuff de ${DEBUFFS.PRE} de 50 % pendant 1 tour. Place un débuff de ${DEBUFFS.POISON} de 5 % pendant 2 tours si la cible souffre d'un débuff de ${DEBUFFS.HEALS}.`,
          damage: "3.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cherche-Coeur",
          description: `Attaque un ennemi. Réduit de 100 % le Compteur de Tour de la cible. Possède 30 % de chances supplémentaires de porter un coup critique. Les dégâts augmentent en fonction des PV MAX de l'ennemi.`,
          damage: "Target Max HP*0.1+ATQ*1.7",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 376",
        "DEF": "738",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
