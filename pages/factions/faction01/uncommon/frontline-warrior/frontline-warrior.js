const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Taille Colérique",
          description: `Attaque 1 ennemi.`,
          damage: "3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frères d'Armes",
          description: `Place un buff de ${BUFFS.ALLY_PROTECT} de 25% sur l'allié ayant le moins de PV, pendant 2 tours. Accorde un Tour Supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 885",
        "ATQ": "595",
        "DEF": "1 299",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
