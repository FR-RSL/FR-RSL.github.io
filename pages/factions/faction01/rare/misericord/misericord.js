const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tuer par Pitié",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 15% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rester vigilant",
          description: `Attaque tous les ennemis. Remplit le Compteur de Tours de ce Champion de 5% pour chaque ennemi en vie.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Larmes amères",
          description: `Place un buff ${BUFFS.COUNTER} et un buff ${BUFFS.ATK} de 25% sur ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 365",
        "DEF": "859",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
