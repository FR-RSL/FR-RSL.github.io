const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Guerre arctique",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour. Les chances passent à 75 % contre les ennemis des Factions des Orcs et de la Tribu Ogryn.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Arrosage",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Possède également 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours contre les ennemis des Factions des Orcs et de la Tribu Ogryn.`,
          damage: "4.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Né pour gagner",
          description: `Attaque un ennemi. Retire tous les buffs de la cible.${RETURN}${RETURN}

Retire tous les buffs de la cible avant d'attaquer lorsque des ennemis des Factions des Orcs et de la Tribu Ogryn sont ciblés.`,
          damage: "7*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 432",
        "DEF": "980",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
