const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frissons du Mal",
          description: `Attaque un ennemi. Possède 25 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 15 % pendant 2 tours.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chair Effritée",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 50 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "1.6*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Transmuter",
          description: `Augmente d'1 tour la durée de tous les buffs alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 145",
        "DEF": "859",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
