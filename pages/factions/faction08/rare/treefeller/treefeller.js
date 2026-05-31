const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Taille Membres",
          description: `Attaque un ennemi. Offre 35 % de chances de placer un débuff de ${DEBUFFS.PRE} de 25 % pendant 2 tours.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Abattage",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 50 % de chances de placer un débuff de ${DEBUFFS.POISON} de 2,5 % pendant 2 tours et 50 % de chances de placer un débuff de ${DEBUFFS.SPD} de 15 % pendant 2 tours.`,
          damage: "2.8*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Poudre Détonante",
          description: `Attaque 2 fois un ennemi pris au hasard. Possède 70 % de chances de placer un débuff de ${DEBUFFS.BOMB} qui détonera après 3 tours.`,
          damage: "3.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 277",
        "DEF": "870",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
