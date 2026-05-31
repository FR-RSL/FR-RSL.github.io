const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lames Exotiques",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 35 % de chances de voler 5 % du Compteur de Tour actuel de la cible.`,
          damage: "1.55*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Larmes Florales",
          description: `Attaque un ennemi. Possède 75 % de chances de placer deux débuffs ${DEBUFFS.POISON} de 5 % et un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "4.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Style Fluide",
          description: `Attaque 3 fois un ennemi. La première frappe possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 3 tours. La deuxième frappe possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 3 tours. La troisième frappe soigne ce Champion de 4 % de ses PV MAX pour chaque débuff sur la cible.`,
          damage: "1.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 663",
        "DEF": "727",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
