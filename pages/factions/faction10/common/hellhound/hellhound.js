const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Morsure Paralysante",
          description: `Attaque 1 ennemi. Place 1 tour de débuff de ${DEBUFFS.SLEEP} sur la cible lorsque le coup passe en critique.`,
          damage: "2.9*ATQ+2.1*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 245",
        "ATQ": "760",
        "DEF": "760",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
