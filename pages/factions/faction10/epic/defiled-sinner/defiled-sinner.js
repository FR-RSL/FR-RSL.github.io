const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Art de Meurtrier",
          description: `Attaque un ennemi. Avant d'attaquer, possède 50 % de chances de placer un débuff de ${DEBUFFS.DEF} de 60 % pendant 2 tours.

Si 5 ennemis ou plus sont vivants, réalise l'attaque suivante à la place :
Attaque tous les ennemis. Avant d'attaquer, place un buff d'${BUFFS.ATK} de 25 % sur ce Champion pendant 2 tours.`,
          damage: "3.8*ATQMultiplier: 2.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mûr pour l'Abattage",
          description: `Attaque un ennemi. Attaque ensuite tous les ennemis, infligeant des dégâts équivalents à 15 % de leurs PV MAX si la première frappe tue un ennemi. La seconde frappe ne peut pas passer en critique.`,
          damage: "6.3*ATQMultiplier: 0.15*Target Max HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brouillard Corrosif",
          description: `Attaque tous les ennemis. Les dégâts augmentent de 10 % pour chaque ennemi vivant. S'additionne jusqu'à 100 %.`,
          damage: "2.9*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "1 222",
        "DEF": "903",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
