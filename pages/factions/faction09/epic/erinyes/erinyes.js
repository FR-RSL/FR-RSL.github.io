const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Griffes Rasoirs",
          description: `Attaque un ennemi. Possède 90 % de chances de placer un débuff ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "3.1*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Terrible Malédiction",
          description: `Attaque tous les ennemis. Possède 75 % de chances d'augmenter d'1 tour la durée de tous les débuffs de la cible.`,
          damage: "3.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flamme Engloutissante",
          description: `Attaque 1 ennemi. Place un débuff de ${DEBUFFS.BLOCK_BUFFS} de 2 tours.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 553",
        "DEF": "881",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Donjons de 70`,
};
