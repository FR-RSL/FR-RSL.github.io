const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gueule Bestiale",
          description: `Attaque 2 fois un ennemi.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Postillons Virulents",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 25 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "2.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tactiques de Meute",
          description: `Attaque un ennemi. Réduit de 100 % le Compteur de Tour de la cible.`,
          damage: "5.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 343",
        "DEF": "782",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
