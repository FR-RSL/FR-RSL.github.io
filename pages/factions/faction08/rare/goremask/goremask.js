const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cassé Net",
          description: `Attaque 2 fois un ennemi.`,
          damage: "1.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sauter à la gorge",
          description: `Attaque un ennemi. Les dégâts augmentent de 20 % si cette attaque passe en critique.`,
          damage: "4.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mâchoires Déchirantes",
          description: `Attaque un ennemi. Ignorera le ${BUFFS.SHIELD} et les buffs de ${BUFFS.BLOCK_DAMAGE}.`,
          damage: "4.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 225",
        "ATQ": "1 509",
        "DEF": "705",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des batailles d'Arène de 25%`,
};
