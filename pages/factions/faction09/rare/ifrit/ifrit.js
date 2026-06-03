const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sort d'Atrophie",
          description: `Attaque un ennemi. Place un débuff d'${DEBUFFS.WEAKEN} de 15% pendant 1 tour.`,
          damage: "5.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Éclair Accablant",
          description: `Attaque un ennemi. Place un débuff de ${DEBUFFS.ATK} de 25% pendant 2 tours. Les dégâts augmentent en fonction des PV MAX de ce Champion.`,
          damage: "2.5*ATQ+0.2*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Champ d'Ombres [P]",
          description: `Réduit de 50% les dégâts subis si les dégâts d'une seule frappe dépassent 30% de PV. Place un débuff de ${DEBUFFS.DEF} de 30% sur l'assaillant, pendant 2 tours, si l'attaque passe en critique.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "815",
        "DEF": "958",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 15%`,
};
