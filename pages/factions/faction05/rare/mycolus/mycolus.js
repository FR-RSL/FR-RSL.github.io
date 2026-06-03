const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Spores de Vigueur",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 30 % des dégâts infligés.${RETURN}${RETURN}

Soigne également l'allié ayant le moins de PV à hauteur de 10 % de ses PV MAX. Ce soin n'affectera pas ce Champion.`,
          damage: "4.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Privilège Fongique",
          description: `Place sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 20 % de ses PV MAX pendant 2 tours, puis place sur tous les alliés sauf ce Champion un buff ${BUFFS.ALLY_PROTECT} de 25 % pendant 2 tours.${RETURN}${RETURN}

Soignera également tous les alliés sauf ce Champion à hauteur de 10 % de leurs PV MAX.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Racines Drainantes [P]",
          description: `Réduit de 5 % les dégâts reçus par tous les alliés. Ce Champion recevra les dégâts à leur place.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "892",
        "DEF": "1 079",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 21%`,
};
