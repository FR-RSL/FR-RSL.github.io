const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Provocation à la Lance",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 10 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "1.65*DEF+2.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Agitateur",
          description: `Attaque 2 fois au hasard.${RETURN}${RETURN}

Possède 25 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "2*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "738",
        "DEF": "1 123",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
