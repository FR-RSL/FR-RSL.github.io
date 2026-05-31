const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rapière Enchantée",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 15 % de chances de placer un débuff ${DEBUFFS.SPD} de 15 % pendant 2 tours.`,
          damage: "2.3*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frappe du Pommeau",
          description: `Attaque un ennemi. Offre 75 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Vole 20 % du Compteur de Tour de la cible si le débuff ${DEBUFFS.STUN} n'est pas placé.`,
          damage: "5.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Moulinet de Lame",
          description: `Attaque tous les ennemis. Offre 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 30 % pendant 2 tours.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 211",
        "DEF": "793",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Donjons de 23%`,
};
