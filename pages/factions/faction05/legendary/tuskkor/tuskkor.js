const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Broyeur d'adversaire",
          description: `Attaque 2 fois un ennemi. 

A 25 % de chances d'accorder un Tour supplémentaire.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Barrage de hachette",
          description: `Attaque tous les ennemis. Les dégâts infligés par cette compétence augmentent de 10 % pour chaque buff dont bénéficie ce Champion. 

Réduit d'1 tour le temps de recharge de cette compétence si cette attaque tue un ennemi. Si cette attaque tue 2 ennemis ou plus, accorde au lieu de ça un Tour supplémentaire à ce Champion.`,
          damage: "4*ATQ*(1+0.1*Active Buff Count)",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Furie de Prime-hache",
          description: `Attaque 2 fois un ennemi. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours.

Ignorera les buffs ${BUFFS.SHIELD}. 

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Véhémence brutale [P]",
          description: `Chaque Tour supplémentaire qu'obtient ce Champion augmente ses DÉG C. de 10 % (s'accumule jusqu'à 50 %). 

Chaque Tour supplémentaire qu'obtient ce Champion réduit également les dégâts qu'il reçoit de 5 % (s'accumule jusqu'à 50 %).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 476",
        "DEF": "1 101",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
