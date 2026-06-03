const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Concasser",
          description: `Attaque 1 ennemi. Possède 15% de chances de porter un coup supplémentaire.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Remède",
          description: `Retire tous les débuffs d'une cible alliée. Soigne la cible de 20%. Les soins augmentent en fonction de la quantité de débuffs retirés.`,
          cooldown: 3,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +5%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "De la Forêt [P]",
          description: `Soigne, à chaque tour, l'allié ayant le moins de PV de 7,5%. Ce soin ne peut pas passer en critique. Ne soignera pas ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 024",
        "DEF": "1 013",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
