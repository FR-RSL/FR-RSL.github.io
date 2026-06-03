const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Terrible Perforation",
          description: `Attaque 4 fois un ennemi. Ignorera 50 % de la DÉF ennemie.`,
          damage: "0.8*ATQ",
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Malédiction d'Agonie",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Possède 75 % de chances de retirer 2 buffs pris au hasard de la cible. Accorde un Tour Supplémentaire.`,
          damage: "6.9*ATQ",
          cooldown: 3,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rite Renaissance [P]",
          description: `Place, au début de chaque round et pendant 2 tours, un buff ${BUFFS.REVIVE_ON_DEATH} sur ce Champion.${RETURN}${RETURN}

Place, pendant 1 tour, un buff ${BUFFS.REVIVE_ON_DEATH} sur ce Champion lorsque ce Champion tue un ennemi avec un coup critique. [Ne peut pas se produire avec les Bébés Araignées.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "1 498",
        "DEF": "859",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
