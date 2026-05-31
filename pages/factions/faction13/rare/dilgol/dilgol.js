const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cartouche Paralysante",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.SPD} de 15 % pendant 2 tours.`,
          damage: "4.35*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tir Épars",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possède 50 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours.`,
          damage: "2.27*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chasse au Gros Gibier",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 40 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "2.45*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 046",
        "DEF": "947",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
