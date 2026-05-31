const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dans le Mille",
          description: `Attaque un ennemi. Octroie un Tour Supplémentaire si la cible est tuée.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Exhortation",
          description: `Retire 1 débuff aléatoire sur tous les alliés. Possède 60 % de chances de placer une ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 3,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Vengeresse [P]",
          description: `Contre-attaque l'assaillant lorsqu'un allié se fait attaquer.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 390",
        "ATQ": "1 167",
        "DEF": "1 035",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Donjons de 16%`,
};
