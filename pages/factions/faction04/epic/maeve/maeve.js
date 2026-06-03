const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Stupéfier",
          description: `Attaque un ennemi. Possède 60% de chances de placer un débuff ${DEBUFFS.SLEEP} pendant 1 tour. Possède 50% de chances d'accorder un Tour Supplémentaire si un débuff ${DEBUFFS.SLEEP} est placé.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Marteau Baveux",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.STUN} pendant 1 tour. Place un débuff ${DEBUFFS.STUN} pendant 2 tours si la cible est affligée d'un débuff ${DEBUFFS.SLEEP}.`,
          damage: "6.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Et ne te relève pas",
          description: `Attaque un ennemi. Les ennemis tués par cette compétence ne peuvent pas être ranimés.`,
          damage: "7.15*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 354",
        "DEF": "936",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
