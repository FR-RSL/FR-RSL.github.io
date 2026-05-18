const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rafale de Fleches",
          description: `Attaque 4 fois de facon aleatoire. Chaque frappe possede 25% de chances de placer un debuff ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "0.7*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Art de la Douleur",
          description: `Attaque tous les ennemis. Possede 30% de chances de placer un debuff ${DEBUFFS.PRE} de 50% pendant 1 tour. Place un debuff ${DEBUFFS.POISON} de 5% pendant 2 tours si la cible souffre d'un debuff ${DEBUFFS.HEALS}.`,
          damage: "3.3*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Cherche-Coeur",
          description: `Attaque un ennemi. Reduit de 100% le Compteur de Tour de la cible. Possede 30% de chances supplementaires de porter un coup critique.`,
          damage: "1.7*ATQ + 0.1*PV MAX Ennemi",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +15%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 376",
        "DEF": "738",
        "VIT": "94",
        "TAUX C.": "15%",
        "DEG C.": "57%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
