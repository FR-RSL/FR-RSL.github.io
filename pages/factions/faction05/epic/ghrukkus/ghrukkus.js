const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton de Raclée",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 15% de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "1.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rentrer dans le rang",
          description: `Attaque un ennemi. Possède 60% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours. Possède également 40% de chances de réduire le Compteur de Tour de la cible de 30%.`,
          damage: "6.2*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Discipline sévère",
          description: `Attaque tous les ennemis. Possède 80% de chances de placer un débuff ${DEBUFFS.ATK} de 50% et un débuff ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "4.25*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 079",
        "DEF": "1 090",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Donjons de 24%`,
};
