const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame Rasoir",
          description: `Attaque un ennemi. Offre 50% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mise au tapis",
          description: `Attaque tous les ennemis. Les dégâts augmentent en fonction des PV MAX de l'ennemi.`,
          damage: "2*ATQ+0.1*Target Max HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ankyloser",
          description: `Attaque 4 fois au hasard. Chaque frappe possède 60% de chances de placer un débuff de ${DEBUFFS.SPD} de 30% pendant 2 tours. Chaque frappe possède également 60% de chances de réduire le Compteur de Tours de la cible de 25%.`,
          damage: "1.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 531",
        "DEF": "771",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Donjons de 35%`,
};
